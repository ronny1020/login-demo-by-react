import React from "react";
import { getUser } from "../actions/getUser";

function Member() {
    const user = getUser();
    if (!user) window.location.replace("/login");

	return (
		<div className="container">
			<h1>親愛的 {user.account} 您好</h1>
		</div>
	);
}

export default Member;
