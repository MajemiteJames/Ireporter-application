# Ireporter-application
 
 # What iReporter App is about
  Corruption is a huge bane to Africa’s development. African countries must develop novel and localised solutions that will curb this       menace, hence the birth of iReporter. iReporter enables any/every citizen to bring any form of corruption to the notice of appropriate     authorities and the general public. Users can also report on things that needs government intervention.

# Required Features
1. Users can create an account and log in.
2. Users can create a red-flag record (An incident linked to corruption).
3. Users can create intervention record (a call for a government agency to intervene e.g
repair bad road sections, collapsed bridges, flooding e.t.c).
4. Users can edit their red-flag or intervention records.
5. Users can delete their red-flag or intervention records.
6. Users can add geolocation (Lat Long Coordinates) to their red-flag or intervention
records .
7. Users can change the geolocation (Lat Long Coordinates) attached to their red-flag or
intervention records .
8. Admin can change the status of a record to either under investigation, rejected (in the
event of a false claim) or resolved (in the event that the claim has been investigated and
resolved) .

# Optional Features
1. Users can add images to their red-flag or intervention records, to support their claims.
2. Users can add videos to their red-flag or intervention records, to support their claims.
3. The application should display a Google Map with Marker showing the red-flag or
intervention location.
4. The user gets real-time email notification when Admin changes the status of their record.
© Andela Confidential
5. The user gets real-time sms notification when Admin changes the status of their record.

# Installtions
1 Clone this repository to your local machine 
  https://majemitejames.github.io/Ireporter-application/index.html
  
 # Install dependencies
 
  npm install

  Run npm run dev-start to start the application.
  
 # API ENDPOINTS
  HTTP VERB	ENDPOINT	FUNCTIONALITY
  GET	/api/v1/red-flags	Fetch all red flags records
  GET	/api/v1/red-flags/:red_flag_id	Fetch a specific red flag record
  POST	/api/v1/red-flags	Create a red flags record
  PATCH	/api/v1/red-flags/red_flag_id/location	Edit the location of a specific red flag record
  PATCH	/api/v1/red-flags/red_flag_id/comment	Edit the comment of a specific red flag record
  DELETE	/api/v1/red-flags/:red_flag_id	Delete a specific red flag record
  
 # Testing
  Install Postman to test the endpoints manually.
  Run npm test to test all the endpoints.
  
  npm install -g mocha
