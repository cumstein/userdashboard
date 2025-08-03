# 📊 User Dashboard

این پروژه یک داشبورد کاربری ساده است که با **React 18 + Vite** ساخته شده و لیست کاربران را از یک API فرضی دریافت می‌کند.  
هدف پروژه: نمایش لیست کاربران، جستجوی real-time، نمایش جزئیات کاربر با Modal و Router، و طراحی ریسپانسیو مدرن با **TailwindCSS**.

---

## ✨ ویژگی‌ها

- دریافت لیست کاربران از [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users)
- نمایش اطلاعات: نام، ایمیل، شماره تلفن، شهر
- قابلیت جستجوی Real-Time بر اساس نام یا ایمیل
- طراحی ریسپانسیو با mui
- کامپوننت‌بندی تمیز: UserList، UserCard، SearchBar، UserDetailsModal
- استفاده از **React Router** برای نمایش Modal جزئیات کاربر در مسیر `/users/:id`
- نمایش Loader هنگام بارگذاری اطلاعات
- مدیریت خطاهای احتمالی در دریافت داده

---
## 🚀 اجرای پروژه
 کلون یا دانلود:
```bash
git clone <https://github.com/cumstein/userdashboard>
cd user-dashboard
نصب وابستگی ها

npm install
 اجرا:

npm run dev

 تکنولوژی‌ها
React
Vite
MUI
React Router

✅ نحوه استفاده
۱. صفحه اصلی → نمایش لیست کاربران
۲. جستجو → نتایج فیلتر می‌شوند
۳. کلیک روی هر کارت → باز شدن Modal با URL /users/:id
۴. بستن Modal → بازگشت به صفحه اصلی

⏱️ مدت زمان انجام تسک
تقریباً 2 تا 1 ساعت (از صفر تا خروجی نهایی)

👨‍💻 توسعه‌دهنده
نام: کامیاب حسین زاده
تاریخ: 1404/05/12
