import React from "react";
import { handleLogin } from "../actions/handleLogin";

function Login() {
	return (
		<div className="container">
			<form
				className="card m-5 p-5"
				onSubmit={(event) => {
					event.preventDefault();
					let account = document.getElementById("account").value;
					let password = document.getElementById("password").value;
					async function login() {
						const checkLogin = await handleLogin(account, password);
						if (checkLogin) window.location.replace("/member");
					}
					login();
				}}
			>
				<div className="form-group">
					<label htmlFor="account">請輸入信箱或手機</label>
					<input type="text" className="form-control" id="account" required />
				</div>
				<div className="form-group">
					<label htmlFor="password">密碼</label>
					<input type="password" className="form-control" id="password" required />
				</div>

				<button type="submit" className="btn btn-primary mt-5 w-25">
					登入
				</button>
			</form>
		</div>
	);
}

export default Login;
