export const instance = axios.create({
  baseURL: 'https://rapi.earthlink.iq/api/reseller',
  timeout: 4000,
  headers: { 
  'Content-Type': 'application/json;charset=UTF-8', 
  'Access-Control-Allow-Origin': '*',
  "Accept": "application/json",
  'Access-Control-Allow-Headers': 'Content-Type, Authorization' ,
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyTmFtZSI6IndhbGFhaW0iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJSZXNlbGxlciIsIkFmZmlsaWF0ZUluZGV4IjoiNjMwMzEiLCJBZmZpbGlhdGVOYW1lIjoid2FsYWFsaW5rMSIsIkFwcGxpY2F0aW9uTmFtZSI6IlJlc2VsbGVyIiwibmJmIjoxNjk1OTI5NzkwLCJleHAiOjE2OTU5MzMzOTAsImlzcyI6ImJpbGxpbmdhcGkiLCJhdWQiOiJkMjZkMTFkZTUxYmE0YmE2YWQ0ZGVhZTc5ODY1Mzk4YiJ9.6uLCUOrY_QYc4DN7lgicMWYLE2t1RtLZkkZFdDvYmVw' }
});