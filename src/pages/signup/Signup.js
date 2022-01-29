import styles from './Signup.module.css'

export default function Signup() {
  return (
    <form className={styles['signup-form']}>
      <h2>Signup</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          
        />
      </label>
      <label>
        <span>password:</span>
        <input 
          type="password"
        />
      </label>
      <label>
        <span>display name:</span>
        <input 
          type="text"
        />
      </label>
      <button className="btn">Submit</button>
    </form>
  )
}
