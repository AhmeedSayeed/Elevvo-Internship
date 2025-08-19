export const PLANS = [
  {
    id: 1,
    type: "Free",
    price: 10,
    features: [
      { text: "Basic task management", includes: true },
      { text: "Real-time collaboration", includes: false },
      { text: "Progress tracking & reports", includes: false },
      { text: "5 Projects limit", includes: true },
      { text: "Community support", includes: true },
    ],
  },
  {
    id: 2,
    type: "Pro",
    price: 50,
    features: [
      { text: "Basic task management", includes: true },
      { text: "Real-time collaboration", includes: true },
      { text: "Progress tracking & reports", includes: true },
      { text: "Unlimited projects", includes: true },
      { text: "Priority support", includes: false },
    ],
  },
  {
    id: 3,
    type: "Team",
    price: 150,
    features: [
      { text: "Basic task management", includes: true },
      { text: "Real-time collaboration", includes: true },
      { text: "Progress tracking & reports", includes: true },
      { text: "Unlimited projects", includes: true },
      { text: "Priority support", includes: true },
    ],
  },
];