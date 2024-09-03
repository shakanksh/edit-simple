"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function Calendar() {
	useEffect(() => {
		(async function () {
			const cal = await getCalApi({ namespace: "introduction" });
			cal("ui", {
				theme: "light",
				styles: { branding: { brandColor: "#ff4500" } },
				hideEventTypeDetails: false,
				layout: "month_view",
			});
		})();
	}, []);
	return (
		<section id='contact' className='bg-accent-100 px-4 py-10'>
			<Cal
				namespace='introduction'
				calLink='edit-simple/introduction'
				style={{ width: "100%", height: "100%", overflow: "scroll" }}
				config={{ layout: "month_view" }}
			/>
		</section>
	);
}
