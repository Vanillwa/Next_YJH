import { useEffect } from "react";
import { FormCheck, Form } from "react-bootstrap";
import { useTheme } from "@/lib/ThemeContext";
import Head from "next/head";

export default function Setting() {
  const { theme, setTheme } = useTheme();

  const handleIsDarkChange = (e) => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <h1>Setting</h1>
      <p>다꾸모드</p>
      <Form>
        <Form.Check // prettier-ignore
          type='switch'
          id='custom-switch'
          label={theme}
          onChange={handleIsDarkChange}
          checked={theme === "dark"}
        />
      </Form>
    </>
  );
}
