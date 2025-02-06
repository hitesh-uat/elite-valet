import { LocationInfo } from './types'

export const initialViewState = {
  latitude: 28.6923052,
  longitude: 77.1265846,
  zoom: 6,
}

export const majorCitiesLocationInfo: LocationInfo[] = [
  {
    placeName: 'Chennai, Tamil Nadu, India',
    latLng: [13.0827, 80.2707],
  },
  {
    placeName: 'Taj Mahal, Agra, Uttar Pradesh, India',
    latLng: [27.1751, 78.0421],
  },
  {
    placeName: 'Amber Fort, Jaipur, Rajasthan, India',
    latLng: [26.9855, 75.8513],
  },
  {
    placeName: 'Gateway of India, Mumbai, Maharashtra, India',
    latLng: [18.922, 72.8347],
  },
  {
    placeName: 'Alleppey Backwaters, Alappuzha, Kerala, India',
    latLng: [9.4981, 76.3388],
  },
  {
    placeName: 'Golden Temple, Amritsar, Punjab, India',
    latLng: [31.62, 74.8765],
  },
  {
    placeName: 'Ghats of Varanasi, Uttar Pradesh, India',
    latLng: [25.3176, 83.0058],
  },
  {
    placeName: 'Red Fort, Delhi, India',
    latLng: [28.6562, 77.241],
  },
  {
    placeName: 'Palolem Beach, Goa, India',
    latLng: [15.0101, 74.0235],
  },
  {
    placeName: 'Mysore Palace, Karnataka, India',
    latLng: [12.3051, 76.6552],
  },
  {
    placeName: 'Hampi Ruins, Karnataka, India',
    latLng: [15.335, 76.46],
  },
  {
    placeName: 'Lake Palace, Udaipur, Rajasthan, India',
    latLng: [24.576, 73.6795],
  },
  {
    placeName: 'Leh Palace, Ladakh, India',
    latLng: [34.1662, 77.5841],
  },
  {
    placeName: 'Rishikesh, Uttarakhand, India',
    latLng: [30.0869, 78.2676],
  },
  {
    placeName: 'Khajuraho Temples, Madhya Pradesh, India',
    latLng: [24.8529, 79.9229],
  },
  {
    placeName: 'Living Root Bridges, Cherrapunji, Meghalaya, India',
    latLng: [25.2713, 91.732],
  },
]

export const VALET_CHARGE_PER_METER = 0.005

export const TAKE_COUNT = 12
