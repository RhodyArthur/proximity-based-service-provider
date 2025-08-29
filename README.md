# 📍 Proximity-Based Service Provider App

> A proximity-based marketplace connecting **local service providers** with **customers**, built with Angular, Maps integration, payments, and AI-powered features.

---

## ✨ Overview

The **Proximity-Based Service Provider App** is an Angular web application that allows users to **discover, book, and pay** for local services (plumbers, tutors, stylists, etc.) based on their location.

- **Customers** can search for nearby providers, filter results, request bookings, leave reviews, and make secure payments.
- **Providers** can create and manage service listings, accept/decline requests, and track earnings.
- **AI-powered features** enhance the experience with smart recommendations, review summaries, and service description optimization.

This project is designed as a **portfolio-ready MVP** that showcases **senior-level Angular practices, scalable architecture, and client-oriented design**.

---

## 🔑 Features

### 👤 Authentication & Onboarding

- Secure signup/login with role selection (Customer / Provider)
- Profile setup with provider details and service categories

### 🔎 Service Discovery (Customer)

- Location-based service search with **map integration**
- Filters: category, rating, price, proximity
- AI-powered provider recommendations

### 👨‍🔧 Service Management (Provider)

- Create, edit, delete service listings
- Set availability and pricing
- AI-assisted service description improvements

### 📅 Booking & Requests

- Customers send booking requests with date/time
- Providers accept/decline requests in real-time
- Booking history for both customers & providers

### ⭐ Reviews & Ratings

- Customers leave ratings and reviews after completed bookings
- Providers’ average ratings displayed on profile
- AI-generated **review summaries** for quick insights

### 💳 Payments

- Secure payments via Stripe (sandbox integration)
- Provider earnings dashboard

### 🔔 Notifications

- Real-time booking updates (accept/decline)
- AI-generated polite responses for providers

### 📱 PWA & Accessibility

- Installable on mobile devices (PWA support)
- Offline fallback for essential features
- Accessibility-first design (WCAG compliant)

---

## 🛠️ Tech Stack

**Frontend:**

- Angular 20+ (with TypeScript)
- TailwindCSS / Angular Material
- Angular Signals or NgRx for state management

**Backend & Database:**

- Yet to build

**AI Integration:**

- OpenAI API (recommendations, summaries, content optimization)

**Other Integrations:**

- Google Maps API / Leaflet.js (geolocation & maps)

**Deployment:**

- Vercel

---

## 🚀 Getting Started

### 1. Clone Repository

````bash
git clone https://github.com/yourusername/proximity-service-app.git
cd proximity-service-app


This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
````

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
