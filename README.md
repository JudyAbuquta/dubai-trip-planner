# Discover Dubai: A Travel Planner

A modern, interactive travel website for planning your Dubai adventure with personalized moodboards. Explore hotels, restaurants, and activities, then build your personalized trip itinerary.


##  Features

### **Hotels Page** (`hotels.html`)
- **Price Filtering**: Interactive slider to filter hotels by price range (0-$3000)
- **Card Layout**: Clean display of 10+ Dubai hotels with images and pricing
- **Add to Trip**: Each hotel can be added to your personal moodboard
- **Responsive Design**: Works seamlessly across devices

### **Restaurants Page** (`restaurant.html`)
- **Category Filtering**: Filter by Drinks, Dessert, Fine Dining, or Casual Dining
- **Detailed Listings**: 12 hand-picked restaurants with locations and images
- **Bootstrap Integration**: Clean, modern styling with Bootstrap components
- **Interactive Cards**: Each restaurant features "Add to Trip" functionality

### **Activities Page** (`activities.html`)
- **Auto-Rotating Carousel**: Showcases Dubai activities with beautiful imagery
- **Interactive Previews**: Click activity cards to open detailed modal views
- **Pinterest-Style Layout**: Grid-based display of popular Dubai activities
- **Star Ratings**: User reviews and ratings for each activity
- **Font Awesome Icons**: Enhanced UI with modern iconography

### **Trip Planner** (`trip-planner.html`)
- **Personal Moodboard**: Pinterest-style layout for your saved items
- **Persistent Storage**: Items saved using localStorage across browser sessions
- **Drag & Drop Ready**: Structured for future drag-and-drop functionality
- **Empty State Handling**: Friendly message when no items are added
- **Item Management**: Remove items directly from your moodboard

### **Homepage** (`index.html`)
- **Modern Navigation**: Responsive navbar with dropdown menu
- **Visual Sections**: Four distinct sections showcasing each category
- **Call-to-Action Links**: Direct links to explore hotels, restaurants, and activities
- **Clean Design**: Minimalist approach with focus on user experience

## Project Structure

```
discover-dubai/
│
├── index.html                    
├── hotels.html                  
├── restaurant.html               
├── activities.html              
├── trip-planner.html           
│
├── css/                          # Stylesheets
│   ├── homepagestyle.css        
│   ├── hotelsstyle.css        
│   ├── restaurantstyle.css     
│   ├── activitiesstyle.css    
│   └── tripplanner.css          
│
├── js/                           # JavaScript files
│   ├── trip.js                  
│   ├── tripplanner.js           
│   ├── activitiesjavascript.js  
│   └── hotelsjavascript.js     
│
└── images/                       # Image assets
    ├── activities/              
    ├── homepage/                
    ├── hotels/                
    ├── restaurant/              
    └── logo2.png                # Website logo
```
### JavaScript Modules
```
trip.js
```
- Purpose: Manages "Add to Trip" functionality across all pages
- Features:
    - Creates structured item objects
    - Stores items in localStorage under "tripPlan" key
    - Prevents duplicate entries
    - Provides user confirmation alerts

```
tripplanner.js
```
- Purpose: Displays and manages the trip moodboard
- Features:
    - Reads from localStorage
    - Dynamically renders Pinterest-style cards
    - Implements random card heights
    - Handles item deletion with localStorage updates
    - Shows empty state messages

```
activitiesjavascript.js
```
- Purpose: Handles activities page interactions
- Features:
    - Auto-rotating carousel (3-second intervals)
    - Manual navigation controls
    - Activity preview popup modals
    - Data-target matching for previews

```
hotelsjavascript.js
```
- Purpose: Manages hotel filtering
- Features:

    - Real-time price range filtering
    - Dynamic label updates
    - No-page-reload user experience

## Built With

- **HTML5** - Semantic markup and structure
- **CSS3** - Custom styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Bootstrap 4/5** - Responsive framework components
- **Font Awesome** - Icons and visual elements
- **LocalStorage API** - Client-side data persistence


##  Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local server for testing (optional but recommended)

### Installation

1. **Clone or Download**
```bash
git clone https://github.com/JudyAbuquta/discover-dubai.git
cd discover-dubai
```

2. **Run Locally**
   - **Option A**: Open `index.html` directly in your browser


3. **Access the Website**

## Future Enhancements

Planned features for upcoming versions:
- [ ] **Drag & Drop** - Reorder items in the moodboard
- [ ] **Multiple Trips** - Save and manage different trip plans
- [ ] **User Accounts** - Save trips to user profiles
- [ ] **Advanced Filters** - More filtering options (cuisine, ratings, distance)
- [ ] **Dark Mode** - Alternative color scheme


### Development Guidelines
- Follow existing code style and structure
- Test changes across multiple browsers
- Update documentation as needed
- Keep commits focused and descriptive


##  Acknowledgments

- **Images**: All images are for demonstration purposes. Real implementation would use licensed images or user uploads.
- **Icons**: Font Awesome for beautiful iconography
- **Inspiration**: Pinterest and modern travel websites for design inspiration
- **Bootstrap**: For responsive framework components

## Contributors
- [Judy Abuquta](https://github.com/JudyAbuquta)
- [Abeer Hussain](https://github.com/abeerahrar)
- Effat University, College of Engineering, Computer Science Department
- Jeddah, Saudi Arabia
