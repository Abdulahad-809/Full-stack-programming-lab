import AboutPage from './pages/about/AboutPage';
import EditBillingAddressPage from './pages/billing/EditBillingAddressPage';
import CategoryPage from './pages/category/CategoryPage';
import ContactPage from './pages/contact/ContactPage';
import ForgotPasswordPage from './pages/forgot-password/ForgotPasswordPage';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';
import MyAccountPage from './pages/my-account/MyAccountPage';
import ProductPage from './pages/product/ProductPage';
import EditProfilePage from './pages/profile/EditProfilePage';
import OrderDetailsPage from './pages/profile/OrderDetailsPage';
import OrderSummaryPage from './pages/profile/OrderSummaryPage';
import RegisterPage from './pages/register/RegisterPage';
import EditShippingAddressPage from './pages/shipping/EditShippingAddressPage';
import PaymentFormPage from './pages/shopping/PaymentFormPage';
import ShoppingCartPage from './pages/shopping/ShoppingCartPage';
import TermsConditionsPage from './pages/shopping/TermsConditionsPage';

function App() {
  const pathname = window.location.pathname;

  if (pathname === '/' || pathname === '/home') {
    return <HomePage />;
  }

  if (pathname === '/category') {
    return <CategoryPage />;
  }

  if (pathname === '/about') {
    return <AboutPage />;
  }

  if (pathname === '/contact') {
    return <ContactPage />;
  }

  if (pathname === '/billing-address') {
    return <EditBillingAddressPage />;
  }

  if (pathname === '/shipping-address') {
    return <EditShippingAddressPage />;
  }

  if (pathname === '/login') {
    return <LoginPage />;
  }

   if (pathname === '/forgot-password') {
    return <ForgotPasswordPage />;
  }

  if (pathname === '/my-account') {
    return <MyAccountPage />;
  }

  if (pathname === '/product') {
    return <ProductPage />;
  }

  if (pathname === '/register') {
    return <RegisterPage />;
  }

  if (pathname === '/profile/edit') {
    return <EditProfilePage />;
  }

  if (pathname === '/profile/order-details') {
    return <OrderDetailsPage />;
  }

  if (pathname === '/profile/order-summary') {
    return <OrderSummaryPage />;
  }

  if (pathname === '/shopping/payment') {
    return <PaymentFormPage />;
  }

  if (pathname === '/shopping/cart') {
    return <ShoppingCartPage />;
  }

  if (pathname === '/shopping/terms') {
    return <TermsConditionsPage />;
  }

  return (
    <main style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Page Not Found</h1>
      <p>
        Open <a href="/">/</a> for home or <a href="/category">/category</a> for the category page.
      </p>
    </main>
  );
}

export default App;
