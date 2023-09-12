import './Newsletter.scss';

const Newsletter = () => {
    return (
        <div className="first-section">
            <form>
                <span className="major-title">Let&apos;s Talk</span>
                <span className="newsletter-main">
                    <span className="newsletter-title"><span className="fancy">Sign up </span>to our Newsletters:</span>
                    <span className="newsletter-form">
                        <input type="email" placeholder="Email" />
                        <button type="submit">Add me</button>
                    </span>
                </span>
            </form>
        </div>
    )
}

export default Newsletter