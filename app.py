import requests
from flask import Flask, jsonify, request
import time

app = Flask(__name__)

# Window size
WINDOW_SIZE = 10

# Test Server APIs
PRIME_API = "http://20.244.56.144/test/primes"
FIBONACCI_API = "http://20.244.56.144/test/fibo"
EVEN_API = "http://20.244.56.144/test/even"
RANDOM_API = "http://20.244.56.144/test/rand"

# API mapping
API_MAP = {
   'p': PRIME_API,
   'f': FIBONACCI_API,
   'e': EVEN_API,
   'r': RANDOM_API
}

# Stored numbers
numbers = []

def fetch_numbers(api_url):
   try:
       response = requests.get(api_url, timeout=0.5)
       response.raise_for_status()
       return response.json().get('numbers', [])
   except (requests.exceptions.RequestException, ValueError):
       return []

def calculate_average(numbers, window_size):
   if len(numbers) < window_size:
       avg = sum(numbers) / len(numbers) if numbers else 0
   else:
       avg = sum(numbers[-window_size:]) / window_size
       numbers = numbers[-window_size + 1:]
   return avg

@app.route('/numbers/<string:number_id>', methods=['GET'])
def get_average(number_id):
   start_time = time.time()
   api_url = API_MAP.get(number_id)
   if not api_url:
       return jsonify({"error": "Invalid number ID"}), 400

   new_numbers = fetch_numbers(api_url)
   numbers.extend(num for num in new_numbers if num not in numbers)
   avg = calculate_average(numbers, WINDOW_SIZE)
   response_data = {
       "windowPrevState": numbers[:-len(new_numbers)],
       "windowCurrState": numbers,
       "numbers": numbers,
       "avg": avg
   }

   end_time = time.time()
   duration = (end_time - start_time) * 1000  # Convert to milliseconds
   print(f"Request duration: {duration:.2f} ms")

   return jsonify(response_data)

if __name__ == '__main__':
   app.run(host='localhost', port=9876, debug=True)