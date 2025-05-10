# CoinSight - Cryptocurrency Market Tracker

![CoinSight Banner](https://res.cloudinary.com/dtogfz0uu/image/upload/v1746860498/Screenshot_2025-05-10_122710_l15ymr.png)

## 📊 Overview

CoinSight is a modern React application for tracking cryptocurrency prices, market caps, and historical data. The application provides users with real-time data from the CoinGecko API, displaying information in an intuitive and responsive interface.

## ✨ Features

- **Real-time Cryptocurrency Data**: Track prices, market caps, and 24-hour changes
- **Multiple Currency Support**: Toggle between USD, EUR, and INR
- **Search Functionality**: Find specific cryptocurrencies quickly
- **Detailed Coin Pages**: View in-depth information about each cryptocurrency
- **Interactive Charts**: Visualize price trends with historical data
- **Responsive Design**: Optimized for desktop and mobile devices
- **Dark Theme**: Modern design with gradient backgrounds

## 🚀 Live Demo

[View Live Demo](https://coin-sight-beige.vercel.app/) - Check it out!

## 🛠️ Technologies Used

- **React.js**: Front-end library for building the user interface
- **React Router**: For navigation between pages
- **Context API**: For state management
- **React Google Charts**: For creating interactive line charts
- **Tailwind CSS**: For styling components
- **CoinGecko API**: For cryptocurrency data
- **Lucide React**: For icons

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Clone the repository
```bash
git clone https://github.com/yourusername/coinsight.git
cd coinsight
```

### Install dependencies
```bash
npm install
# or
yarn install
```

### Run the development server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the application.

## 📁 Project Structure

```
coinsight/
├── src/
│   ├── assets/          # Images, icons, and other static files
│   ├── components/      # Reusable components
│   │   ├── Footer/      # Footer component
│   │   ├── LineChart/   # Chart component for visualizing data
│   │   └── Navbar/      # Navigation bar component
│   ├── context/         # React context for state management
│   ├── pages/           # Page components
│   │   ├── Coin/        # Individual coin page
│   │   └── Home/        # Homepage
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── .gitignore           # Git ignore file
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## 🌐 API Integration

CoinSight uses the CoinGecko API to fetch cryptocurrency data. The API is called in the following components:

- `CoinContext.jsx`: Fetches a list of all cryptocurrencies
- `Coin.jsx`: Fetches specific coin data and historical price data

Note: The CoinGecko API has rate limits. For production use, consider implementing caching or upgrading to a paid plan.

## 📱 Screenshots

### Home Page
![Home Page](https://res.cloudinary.com/dtogfz0uu/image/upload/v1746860498/Screenshot_2025-05-10_122743_zyqyqo.png)

### Coin Detail Page
![Coin Detail](https://res.cloudinary.com/dtogfz0uu/image/upload/v1746860498/Screenshot_2025-05-10_122805_cf2pjm.png)

### Mobile View
![Mobile View](https://res.cloudinary.com/dtogfz0uu/image/upload/v1746860481/WhatsApp_Image_2025-05-10_at_12.30.25_3388e3d9_vvxikq.jpg)

## 🔄 Future Enhancements

1. **User Authentication**: Allow users to create accounts and save favorite coins
2. **Watchlist**: Enable users to create personalized watchlists
3. **Notifications**: Implement price alerts for specific cryptocurrencies
4. **Portfolio Tracking**: Allow users to track their cryptocurrency holdings
5. **News Integration**: Incorporate crypto news feeds
6. **Advanced Charts**: Add more technical indicators and timeframes
7. **Dark/Light Mode Toggle**: Add the ability to switch between themes

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [CoinGecko API](https://www.coingecko.com/en/api) for providing cryptocurrency data
- [React](https://reactjs.org/) for the front-end library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React Google Charts](https://www.react-google-charts.com/) for the interactive charts
- [Lucide React](https://lucide.dev/) for the beautiful icons

---

Made with ❤️ by Mayur
