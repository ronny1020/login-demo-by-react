import React from "react";

function Login() {
	return (
		<div className="container">
			<form>
				<div className="form-group">
					<label htmlFor="emailOrPhone">請輸入信箱或手機</label>
					<input type="text" className="form-control" id="emailOrPhone" required />
				</div>
				<div className="form-group">
					<label htmlFor="password">密碼</label>
					<input type="password" className="form-control" id="password" required />
				</div>

				<button type="submit" className="btn btn-primary">
					登入
				</button>
			</form>
		</div>
	);
}

export default Login;
