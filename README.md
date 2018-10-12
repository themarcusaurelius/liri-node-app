# liri-node-app

Liri is an app that takes in the user's commands/requests from git and returns the appropriate answer. It is currently set up to handle requests for Songs, Movies, and Concerts. The three APIs used to retrieve this information are Spotify, OMDB, and Bands In Town. 

In the git terminal, the user will use a command such as: 

```
node liri spotify-this-song "All Star"
```
The app will then make a JSON request to the appropriate API and then will return a response. For this specific example the response should be:

```
 ----------------------------------
 * Song: All Star
 * Artist: "Smash Mouth"
 * No url found.
 * Album: "Astro Lounge"
 ----------------------------------
```
which then displays the Artist, Song, Link to the song for preview, and Album. If there is no link it will return "No URL found".
If the song cannot be found then Liri will chastise you and tell you to have better taste in music


 
Below are examples for the Movie and Concert requests. 

Movie:

  Command:
    
    node liri movie-this "The Goonies"
    
  Response:
    
    ----------------------------------
     * Title: The Goonies
     * Year: 1985
     * IMDB Rating: 7.8
     * Rotten Tomatoes Rating: 70%
     * Country: USA
     * Language: English, Spanish, Cantonese, Italian
     * Plot: In order to save their home from foreclosure, a group of misfits set out to find a pirate's ancient valuable treasure.
     * Actors: Sean Astin, Josh Brolin, Jeff Cohen, Corey Feldman
     ----------------------------------
    
Concert:

  Command:
     
     
     node liri concert-this "Metallica"
     
     
  Response:
     
     
       * Concert Information for Metallica

       --------------------------------------------
       * Venue: Zilker Metropolitan Park
       * Location: Austin, TX United States
       * Date: 10/13/2018
       --------------------------------------------

       --------------------------------------------
       * Venue: Fiserv Forum
       * Location: Milwaukee, WI United States
       * Date: 10/16/2018
       --------------------------------------------

       --------------------------------------------
       * Venue: PPG Paints Arena
       * Location: Pittsburgh, PA United States
       * Date: 10/18/2018
       --------------------------------------------

       --------------------------------------------
       * Venue: Bryce Jordan Center
       * Location: University Park, PA United States
       * Date: 10/20/2018
       --------------------------------------------

       --------------------------------------------
       * Venue: Spectrum Center
       * Location: Charlotte, NC United States
       * Date: 10/22/2018
       --------------------------------------------

       --------------------------------------------
       * Venue: Wells Fargo Center
       * Location: Philadelphia, PA United States
       * Date: 10/25/2018
       --------------------------------------------

       --------------------------------------------
       * Venue: KeyBank Center
       * Location: Buffalo, NY United States
       * Date: 10/27/2018
       --------------------------------------------

       --------------------------------------------
       * Venue: Times Union Center
       * Location: Albany, NY United States
       * Date: 10/29/2018
       --------------------------------------------

       --------------------------------------------
       * Venue: T-Mobile Arena
       * Location: Las Vegas, NV United States
       * Date: 11/26/2018
       --------------------------------------------

       --------------------------------------------
       * Venue: Taco Bell Arena
       * Location: Boise, ID United States
       * Date: 11/28/2018
       --------------------------------------------

       --------------------------------------------
       * Venue: Vivint Smart Home Arena
       * Location: Salt Lake City, UT United States
       * Date: 11/30/2018
       --------------------------------------------

       --------------------------------------------
       * Venue: Spokane Arena
       * Location: Spokane, WA United States
       * Date: 12/02/2018
       --------------------------------------------

       --------------------------------------------
       * Venue: Moda Center
       * Location: Portland, OR United States
       * Date: 12/05/2018
       --------------------------------------------

       --------------------------------------------
       * Venue: Golden 1 Center
       * Location: Sacramento, CA United States
       * Date: 12/07/2018
       --------------------------------------------

       --------------------------------------------
       * Venue: Save Mart Center
       * Location: Fresno, CA United States
       * Date: 12/09/2018
       --------------------------------------------

       --------------------------------------------
       * Venue: BOK Center
       * Location: Tulsa, OK United States
       * Date: 01/18/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Verizon Arena
       * Location: North Little Rock, AR United States
       * Date: 01/20/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Legacy Arena at The BJCC
       * Location: Birmingham, AL United States
       * Date: 01/22/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Bridgestone Arena
       * Location: Nashville, TN United States
       * Date: 01/24/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: PNC Arena
       * Location: Raleigh, NC United States
       * Date: 01/28/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: U.S. Bank Arena
       * Location: Cincinnati, OH United States
       * Date: 01/30/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Quicken Loans Arena
       * Location: Cleveland, OH United States
       * Date: 02/01/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Don Haskins Center
       * Location: El Paso, TX United States
       * Date: 02/28/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: United Supermarkets Arena
       * Location: Lubbock, TX United States
       * Date: 03/02/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Intrust Bank Arena
       * Location: Wichita, KS United States
       * Date: 03/04/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Sprint Center
       * Location: Kansas City, MO United States
       * Date: 03/06/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: KFC Yum! Center
       * Location: Louisville, KY United States
       * Date: 03/09/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Bankers Life Fieldhouse
       * Location: Indianapolis, IN United States
       * Date: 03/11/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Van Andel Arena
       * Location: Grand Rapids, MI United States
       * Date: 03/13/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Restelo Stadium
       * Location: Lisbon,  Portugal
       * Date: 05/01/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Valdebebas - IFEMA
       * Location: Madrid,  Spain
       * Date: 05/03/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Estadi Olímpic Lluís Companys
       * Location: Barcelona,  Spain
       * Date: 05/05/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Ippodromo Snai - San Siro
       * Location: Milan,  Italy
       * Date: 05/08/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Stadion Letzigrund
       * Location: Zürich,  Switzerland
       * Date: 05/10/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Stade de France
       * Location: Paris,  France
       * Date: 05/12/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: SLANE CASTLE
       * Location: Co. Meath,  Ireland
       * Date: 06/08/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Johan Cruijff ArenA
       * Location: Nieuw-amsterdam,  Netherlands
       * Date: 06/11/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: RheinEnergieSTADION
       * Location: Köln,  Germany
       * Date: 06/13/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Stade Roi Baudouin
       * Location: Bruxelles,  Belgium
       * Date: 06/16/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Etihad Stadium
       * Location: Manchester,  United Kingdom
       * Date: 06/18/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Twickenham Stadium
       * Location: London,  United Kingdom
       * Date: 06/20/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Olympiastadion
       * Location: Berlin,  Germany
       * Date: 07/06/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Ullevi Restaurant & Conference
       * Location: Göteborg,  Sweden
       * Date: 07/09/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Telia Parken
       * Location: Copenhagen,  Denmark
       * Date: 07/11/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Granasen Arena
       * Location: Trondheim,  Norway
       * Date: 07/13/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: KANTOLAN TAPAHTUMAPUISTO
       * Location: Hameenlinna,  Finland
       * Date: 07/16/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Raadi lennuväli, Tartu
       * Location: Tartu,  Estija
       * Date: 07/18/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: The Luzhniki Stadium
       * Location: Moscow,  Russia
       * Date: 07/21/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: NATIONAL ARENA
       * Location: Bucuresti,  Romania
       * Date: 08/14/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Ernst Happel Stadion
       * Location: Wien,  Austria
       * Date: 08/16/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Letiště Praha Letňany
       * Location: Praha,  Czech Republic
       * Date: 08/18/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: PGE Narodowy
       * Location: Warsaw,  Poland
       * Date: 08/21/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Olympiastadion
       * Location: Munchen,  Germany
       * Date: 08/23/2019
       --------------------------------------------

       --------------------------------------------
       * Venue: Maimarkt Gelände
       * Location: Mannheim,  Germany
       * Date: 08/25/2019
       --------------------------------------------
       
 
 
