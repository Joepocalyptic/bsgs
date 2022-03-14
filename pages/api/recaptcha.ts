import fetch from "node-fetch"
import type { VercelRequest, VercelResponse } from "@vercel/node"

type CaptchaResponse = {
    success: boolean,
    score: number,
    action: string,
    challenge_ts: string,
}

export default async (request: VercelRequest, res: VercelResponse) => {
    const { body, method } = request

    const { captcha } = body

    if (method === "POST") {
        if (!captcha) {
            return res.status(422).json({
                message: "Unprocessable request; please provide the 'captcha' field",
            });
        }

        try {
            const response = await fetch(
                `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
                    },
                    method: "POST",
                }
            )

            const captchaValidation: CaptchaResponse = await response.json()

            if (captchaValidation.success) {
                if(captchaValidation.score >= 0.5) {
                    return res.status(200).send("OK")
                }
            }

            return res.status(422).json({
                message: "Unprocessable request; invalid CAPTCHA code or failed token",
            })
        } catch (error) {
            console.log(error)
            return res.status(422).json({ message: "Something went wrong" })
        }
    }
    return res.status(404).send("Not found")
}