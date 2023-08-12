function getHtmlForValidationNumberMail(verifyNumber){
    return `
        <div style="color:#999999; text-align:center;font-size:13px;">אם אינך רואה מייל זה כראוי לחץ כאן</div>
        <div style="background: linear-gradient(225deg,#ffaa00 0%,#ff7100 100%); height:10px;"></div>
        <div>
        <div style="margin:10px auto 12px;width:100px;">
            <img style="width:100px;height:60px;" src="https://ci3.googleusercontent.com/proxy/3amd9QMlyH6cSpTgT2jpxmwbg8EjeDTIqQ-hpPCpJYVEd42SltmVaY_wrzdcFzZSs470DiGpxTLj6Puqh2C-4OHNeFnJ74jQBBuSJpunxmi16CR2cm2nvFY=s0-d-e1-ft#https://assets.yad2.co.il/yad2site/y2assets/images/header/yad2Logo.png"/>
        </div>
        </div>
        <div style="font-size:26px;font-weight:300;text-align:center;">היי,</div>
        <div style="font-size:20px; font-weight:300;text-align:center;">
        ראינו שהתחלת את ההרשמה ליד2, אין לך מושג כמה זה משמח אותנו
        <img style="height:1.2em;width:1.2em;vertical-align:middle;" data-emoji="🙂" alt="🙂" aria-label="🙂" src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f642/72.png" loading="lazy">
        </div>
        <div style="font-size:20px;font-weight:300;text-align:center;">לסיום ההרשמה, קוד האימות שלך הוא:</div>
        <div style="text-align:center;padding:30px 0 40px;">
        <div style="font-size:36px;font-weight:300;">${verifyNumber}</div>
        <div style="color:#999999">קוד האימות תקף ל-5 דקות</div>
        </div>
        <div style="font-size:20px;font-weight:300;text-align:center;margin-bottom:30px;">
        <div>נתראה בצד השני בסיום ההרשמה,</div>
        <div>יד2</div>
        </div>
        <div style="font-size:12px;font-weight:300;">
        <div style="background-color:#f5f5f5;text-align:center;padding:24px 0 12px;">
            לשאלות ובירורים נוספים,
            <a href="https://www.yad2.co.il/contactus" style="color:#ff7100;">
            ניתן ליצור איתנו קשר כאן
            </a> 
        </div>
        <div style="background-color:#f5f5f5;padding-top:6px;">
            <div style="margin:auto;width:235px;">
            <a style="margin-left:10px;" href="https://www.yad2.co.il/" target="_blank">
                <img src="https://ci4.googleusercontent.com/proxy/4V-zioNjS9SX0th9nmpJePB0KAul00PcGYf8Hctib3siGDWahVfgA3CzLx3xPjAV7mQYBiLMgydnQIvPk727q0fJ7mOmfNtJZfavEA=s0-d-e1-ft#https://assets.yad2.co.il/personal/images/emails/Yad2.png"/>
            </a>
            <a style="margin-left:10px;" href="https://www.yad2.co.il/contactus" target="_blank">
                <img src="https://ci6.googleusercontent.com/proxy/DqegPUs4qpbBruE8U_Fr88zRles9Bldl0HTVhD1t1-9kdMr9NKUdfsRyVu4JY0sD7BmvWV6NHcLqiiu3VGAtJJUHTNum6ZByPUNPWSA=s0-d-e1-ft#https://assets.yad2.co.il/personal/images/emails/Email.png"/>
            </a>
            <a style="margin-left:10px;" href="https://www.facebook.com/yad2page/" target="_blank">
                <img src="https://ci6.googleusercontent.com/proxy/om268f-oC05RANQ5w50aleExeTLL61TKQU6QGa8liZvAyJ1AceCH2t8eCZQKW_lkMQtLTewe3u0aYYSCU29SwNuX97vJ1ty34Y9lkxFpTOM=s0-d-e1-ft#https://assets.yad2.co.il/personal/images/emails/Facebook.png"/>
            </a>
            <a style="margin-left:10px;" href="https://www.youtube.com/user/MeYad2" target="_blank">
                <img src="https://ci3.googleusercontent.com/proxy/DUQlzxgFCprJGo9Kd4-x6VCqfvZVBHlrzrQ2_vUJLVYO4YJNjp_dqxUaG4PM33r3E4LAq6QzF59ltkSHyZxR7zcLo2nU4mqrKS4EzZW04Q=s0-d-e1-ft#https://assets.yad2.co.il/personal/images/emails/Youtube.png"/>
            </a>
            <a href="https://www.instagram.com/yad2page/" target="_blank">
                <img src="https://ci5.googleusercontent.com/proxy/V0U16t28giskv87oDbxEfiC-h2ppRY4OYLnY0pye2yC1XyvvGNq77F00aLWN7Ko0RBY-ps3XVH0vkjfOxhyLLYu6MXcA37ZIMFpoeEEfS8f1=s0-d-e1-ft#https://assets.yad2.co.il/personal/images/emails/Instagram.png"/>
            </a>
            </div>
        </div>
        <div style="background-color:#f5f5f5;padding:16px 0 22px;width:100%;">
            <div style="height:1px;max-width:580px;width:80%;background-color:#9a9a9a; margin:0 auto;"></div>
        </div>
        <div style="background-color:#f5f5f5;">
            <div style="text-align:center;padding-bottom:30px;width:60%;max-width:390px;margin:auto;">
            ניתן לפנות אלינו כאן במספר
            <a href="tel:03-5522222" style="color:#ff7100;">
                03-5522222
            </a>
            בימים א'-ה' בין השעות 8:00- 18:00, בימי ו' וערבי חג בין השעות 8:00-13:00
            </div>
        </div>
        </div>
    `
}
module.exports=getHtmlForValidationNumberMail