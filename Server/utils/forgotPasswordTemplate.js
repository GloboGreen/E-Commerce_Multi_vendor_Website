const forgotPasswordTemplate = ({ name, otp }) => {
  return `
<div>
    <p>Dear, ${name}</p>
    <p>You're requested a password reset. Please use following OTP code to reset your password.</p>
    <div style="background:yellow; font-size:20px;padding:20px;text-align:center;font-weight : 800;">
        ${otp}
    </div>
    <p>This otp is valid for 2 minutes only. Enter this otp in the GloboGreen website to proceed with reseting your password.</p>
    <br/>
    </br>
    <p>Thanks</p>
    <p>GloboGreen</p>
</div>
    `;
};

export default forgotPasswordTemplate;
