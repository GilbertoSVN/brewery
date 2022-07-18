interface BreweryResponse {
  id: string
  name: string
  brewery_type?: string
  street?: null
  address_2?: null
  address_3?: null
  city?: string
  state?: string
  county_province?: null
  postal_code?: string
  country?: string
  longitude?: null
  latitude?: null
  phone?: string
  website_url?: string
  updated_at?: string
  created_at?: string
}

export default BreweryResponse
