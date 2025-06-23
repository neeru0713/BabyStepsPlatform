![image](https://github.com/user-attachments/assets/1a50ca37-0192-4470-a7b6-f36e81a7be67)
![image](https://github.com/user-attachments/assets/2154339b-d927-4506-aacd-4dd34212e8de)
![image](https://github.com/user-attachments/assets/71a3756b-3034-4975-90df-a4051bafb3f3)

# 👶 BabySteps: Milestone Tracker

The **Milestone Tracker** is a full-stack web application that helps users log, view, and share key pregnancy or preconception milestones. It also allows users to view and contribute community tips to support others on their journey.

## 🚀 Features

### ✅ User Capabilities
- Add and manage personal milestones like:
  - *First Ultrasound*
  - *Prenatal Vitamins Started*
  - *Heard Baby's Heartbeat*
- View milestones in both **grid** and **timeline** formats
- Attach personal notes to milestones
- Share milestones with a partner or caregiver
- View and contribute **community tips** for each milestone
- Receive **personalized weekly tips** based on due date

### 🔐 Authentication
- User registration and login using JWT
- Authenticated API requests to protect user data

---

## 🖥️ Tech Stack

| Layer        | Tech Used                            |
|--------------|---------------------------------------|
| Frontend     | React, Tailwind CSS, React Router     |
| Backend      | Node.js, Express                      |
| Database     | MongoDB (Mongoose)                    |
| Auth         | JWT                                   |
| Dev Tools    | Vite, Axios, React Toastify           |

---

## 🛠️ Setup Instructions

### 📦 Backend
1. Navigate to `/backend`:
   ```bash
   cd backend
   npm install
   ```

2. Create a .env file:
    ```
    MONGO_URI=your_mongo_connection
    JWT_SECRET=your_jwt_secret
    ```

3.  Start server
    ```
    npm run start
    ```

4. Navigate to /frontend:
    ```
    cd frontend
    npm install
    ```
5. Start development server:
    ```
    npm run dev
    ```
### 📡 API Endpoints

| Method | Endpoint                  | Description                          |
|--------|---------------------------|--------------------------------------|
| POST   | /api/auth/register        | Register new user                    |
| POST   | /api/auth/login           | Login user                           |
| GET    | /api/users                | Fetch current user info              |
| GET    | /api/milestones           | Get user milestones                  |
| POST   | /api/milestones           | Create a new milestone               |
| PUT    | /api/milestones/:id       | Update milestone                     |
| DELETE | /api/milestones/:id       | Delete milestone                     |
| GET    | /api/tips/:milestoneId    | Fetch tips for a milestone           |
| POST   | /api/tips                 | Add a tip to a milestone             |
| POST   | /api/share/:milestoneId   | Share milestone with another user    |


### Personalization and Inclusivity

We personalize user experience by:

1. Calculating pregnancy week from the due date

2. Showing weekly health tips tailored to that stage of pregnancy


### Bonus Features

* Toast notifications for better feedback UX

* Mobile-first responsive design

* Partner milestone sharing (multi-user view)

* Dynamic weekly pregnancy tips

### Attribution

* React Icons

* React Toastify

* Tailwind CSS

###  Coming Soon (Optional Enhancements)

* Real-time tips (via Socket.io)

* Tip likes and analytics

* Admin moderation panel



   