import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
    <MainNavigation />
    <main>
        <h2>404 Error: Page Not Found!</h2>
        <p>Coult not find this page</p>
    </main>
    </>
   
  );
}
export default ErrorPage;