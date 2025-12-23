# import requests
# from datetime import datetime, timedelta
# from geopy.geocoders import Nominatim
# from geopy.exc import GeocoderTimedOut, GeocoderServiceError

# # --- Configuration ---
# LOCATION_INPUT = input("Enter a city, town, or pincode/ZIP code (e.g., New Delhi or 110001): ")
# DAYS_TO_GO_BACK = 7
# UNITS = "celsius" # or "fahrenheit"

# # 1. GEOCONDING: Convert location name/pincode to coordinates using geopy
# def get_coordinates(location_query):
#     """Uses Nominatim to resolve location query (name or pincode) to coordinates."""
#     try:
#         # Initialize the geocoder
#         geolocator = Nominatim(user_agent="weather_app_script")
        
#         print("\n>>> Resolving location...")
        
#         # Geocode the query
#         location = geolocator.geocode(location_query)

#         if location is None:
#             return None, "Location not found."

#         # Attempt to extract pincode from address components (may not always be available)
#         address_components = location.raw.get('address', {})
#         pincode = address_components.get('postcode')
        
#         return location, pincode

#     except (GeocoderTimedOut, GeocoderServiceError) as e:
#         return None, f"Geocoding service error: {e}"
#     except Exception as e:
#         return None, f"An unexpected error occurred during geocoding: {e}"

# location_result, pincode = get_coordinates(LOCATION_INPUT)

# if location_result is None:
#     print(f"❌ Error: {pincode}")
#     exit()

# # Extract coordinates and display name
# lat = location_result.latitude
# lon = location_result.longitude
# display_name = location_result.address

# print(f"\n✅ Found Location: {display_name}")
# print(f"   Coordinates: Latitude={lat:.4f}, Longitude={lon:.4f}")
# if pincode:
#     print(f"   Pincode/ZIP: {pincode}")

# # 2. HISTORICAL WEATHER FETCH: Get past 7 days of daily weather data
# end_date = datetime.now()
# start_date = end_date - timedelta(days=DAYS_TO_GO_BACK)

# start_date_str = start_date.strftime('%Y-%m-%d')
# end_date_str = end_date.strftime('%Y-%m-%d')

# try:
#     weather_url = (
#         f"https://archive-api.open-meteo.com/v1/archive?"
#         f"latitude={lat}&longitude={lon}&start_date={start_date_str}&end_date={end_date_str}&"
#         f"daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto&temperature_unit={UNITS}"
#     )
    
#     weather_response = requests.get(weather_url).json()

#     if weather_response.get('error'):
#          print(f"❌ Error fetching weather data: {weather_response['reason']}")
#          exit()

#     print(f"\n--- Past {DAYS_TO_GO_BACK} Days of Daily Weather Data ({UNITS.capitalize()}) ---")

#     daily_data = weather_response['daily']
    
#     # Create a nice, readable output
#     print(f"{'Date':<12}{'Max Temp':<12}{'Min Temp':<12}{'Rain (mm)':<12}")
#     print("-" * 48)

#     for i, date_str in enumerate(daily_data['time']):
#         max_t = daily_data['temperature_2m_max'][i]
#         min_t = daily_data['temperature_2m_min'][i]
#         precip = daily_data['precipitation_sum'][i]

#         print(f"{date_str:<12}{max_t:<12.1f}{min_t:<12.1f}{precip:<12.1f}")

#     print("--------------------------------------------------")
    
# except Exception as e:
#     print(f"An error occurred while fetching weather data: {e}")

# import json
# from geopy.geocoders import Nominatim
# from geopy.exc import GeocoderTimedOut, GeocoderServiceError

# def get_pincode_json():
#     """Fetches and prints the raw JSON geocoding data for a given pincode."""
    
#     # --- 1. Get User Input ---
#     pincode_input = input("Enter the Pincode/ZIP code to search (e.g., 110001): ")
    
#     # --- 2. Initialize Geocoder ---
#     # Using a unique user_agent is required by Nominatim's usage policy.
#     geolocator = Nominatim(user_agent="pincode_json_test_app")
    
#     # --- 3. Geocode and Fetch Raw Data ---
#     try:
#         print(f"\n>>> Searching for details of Pincode: {pincode_input}...")
        
#         # Use the postalcode structured query for precision/
#         location = geolocator.geocode(
#             {'postalcode': pincode_input},
#             # addressdetails=True ensures the raw data includes a detailed address breakdown
#             addressdetails=True, 
#             exactly_one=True
#         )

#         if location is None:
#             print(f"❌ Error: No location found for pincode {pincode_input}")
#             return

#         # The 'raw' attribute contains the full JSON object from the API
#         raw_data = location.raw
        
#         # --- 4. Print JSON Object ---
#         print("\n--- RAW JSON OBJECT (Location Details) ---")
#         # Use json.dumps to print the dictionary as a formatted JSON string
#         print(json.dumps(raw_data, indent=4)) 
#         print("------------------------------------------")

#     except (GeocoderTimedOut, GeocoderServiceError) as e:
#         print(f"❌ Geocoding Service Error: {e}")
#     except Exception as e:
#         print(f"❌ An unexpected error occurred: {e}")

# if __name__ == "__main__":
#     get_pincode_json()

import requests
import json
from datetime import datetime, timedelta
from geopy.geocoders import Nominatim
from geopy.exc import GeocoderTimedOut, GeocoderServiceError

def get_single_day_hourly_weather_json():
    """
    Prompts for a location and date, fetches hourly historical weather data for that single day, 
    and prints the raw JSON response.
    """
    
    # --- 1. Get User Input (Location & Date) ---
    location_input = input("Enter a city, town, or pincode/ZIP code: ")
    date_input = input("Enter the specific date for the report (YYYY-MM-DD, e.g., 2024-05-15): ")
    
    try:
        # Validate and format the date
        datetime.strptime(date_input, '%Y-%m-%d')
        start_date_str = date_input
        end_date_str = date_input # Request for a single day
    except ValueError:
        print("❌ Error: Date must be in YYYY-MM-DD format.")
        return

    # --- 2. Geocoding (Location to Coordinates) ---
    try:
        geolocator = Nominatim(user_agent="single_day_weather_app")
        print(f"\n>>> Resolving location for '{location_input}'...")
        location_result = geolocator.geocode(location_input, exactly_one=True)

        if location_result is None:
            print(f"Error: Location '{location_input}' not found.")
            return

        lat = location_result.latitude
        lon = location_result.longitude
        print(f"✅ Resolved to: {location_result.address} (Lat: {lat:.4f}, Lon: {lon:.4f})")

    except (GeocoderTimedOut, GeocoderServiceError) as e:
        print(f"❌ Geocoding Service Error: {e}")
        return
    except Exception as e:
        print(f"❌ An unexpected error occurred during geocoding: {e}")
        return

    # --- 3. Historical Weather Fetch (Hourly Data) ---
    
    # URL for Open-Meteo Historical (Archive) API
    weather_url = (
        f"https://archive-api.open-meteo.com/v1/archive?"
        f"latitude={lat}&longitude={lon}&start_date={start_date_str}&end_date={end_date_str}&"
        f"hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code,precipitation&"
        f"timezone=auto"
    )
    
    print(f"\n>>> Fetching hourly weather data for {start_date_str}...")

    try:
        weather_response = requests.get(weather_url)
        weather_response.raise_for_status() # Raise HTTPError for bad responses (4xx or 5xx)
        raw_data = weather_response.json()

        # --- 4. Print Raw JSON Object ---
        print(f"\n--- RAW JSON OBJECT: Hourly Report for {start_date_str} ---")
        # Use json.dumps to print the dictionary as a formatted JSON string
        print(json.dumps(raw_data, indent=4))
        print("-------------------------------------------------------------")

    except requests.exceptions.RequestException as e:
        print(f"❌ Error fetching weather data from API: {e}")
    except Exception as e:
        print(f"❌ An unexpected error occurred: {e}")


if __name__ == "__main__":
    get_single_day_hourly_weather_json()