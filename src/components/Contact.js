import React from 'react'

function Contact() {
    return (
        <div id="contact">
            <div className="contact-content">
                <div id="links"> 
                    <a href="https://www.linkedin.com/in/elmir-mohammed-82b9201b7/">Lets connect on <i class="fab fa-linkedin"></i></a>
                    <a href="https://twitter.com/ElmirMohammed11">Follow me on <i class="fab fa-twitter"></i></a>
                    <a href="https://web.facebook.com/mohammed.elmir.3">Lets connect on <i class="fab fa-facebook-f"></i></a>
                    <a href="https://github.com/Knight-Khode?tab=repositories">Check my repos <i class="fab fa-github"></i></a>
                </div>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Send"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
