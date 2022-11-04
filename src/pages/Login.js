import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await supabase.auth.signInWithOtp({ email });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log (user);
      if (user) {
        navigate("/");
      }
    };
    getUser();
  }, [navigate]);
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="name"
          placeholder="Ingrese su e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
