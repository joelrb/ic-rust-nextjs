import { UseSharedCallReturnType } from "@ic-reactor/react/dist/types"
import { Hello, useAuth } from "service/hello"
import styles from "styles/Login.module.css"

interface LoginProps {
  getName: UseSharedCallReturnType<Hello, "get_name">["call"]
}

const Login: React.FC<LoginProps> = ({ getName }) => {
  const {
    login,
    logout,
    loginLoading,
    loginError,
    identity,
    authenticating,
    authenticated
  } = useAuth({
    onAuthenticationSuccess: () => getName(),
    onLoginSuccess: () => getName()
  })

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
