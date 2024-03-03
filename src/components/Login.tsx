import { useAuth } from "service/todo"
import styles from "styles/Login.module.css"

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const {
    login,
    logout,
    loginLoading,
    loginError,
    identity,
    authenticating,
    authenticated
  } = useAuth()

  const handleLogin = async () => {
    if (authenticated) {
      await logout()
    } else {
      await login()
    }
  }

  return (
    <div className={styles.container}>
      {loginError ? <div className={styles.error}>{loginError}</div> : null}
      {loginLoading && <div className={styles.loading}>Loading...</div>}
      {identity && (
        <div className={styles.user}>{identity.getPrincipal().toText()}</div>
      )}
      <button onClick={handleLogin} disabled={authenticating}>
        {authenticated ? "Logout" : "Login"}
      </button>
    </div>
  )
}

export default Login
