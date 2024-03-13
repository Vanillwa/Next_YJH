import styles from "@/styles/Header.module.css"
import { useRouter } from "next/router"

export default function Header(){
  const router = useRouter();
  return(
    <header>
      <ul className={styles.gnb}>
        <li onClick={()=>router.push('/')}>Home</li>
        <li onClick={()=>router.push('/setting')}>Settings</li>
      </ul>
    </header>
  )
}