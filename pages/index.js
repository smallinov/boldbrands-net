import Head from 'next/head'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <Head>
        <title>Bold Brands</title>
        <meta name="description" content="
        <section style="text-align: center; padding: 60px 20px;">
            <h1 style="font-size: 3rem; margin-bottom: 20px; color: #1a1a1a;">Make " />
      </Head>
      
      <header className="header">
        <div className="container">
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </div>
      </header>
      
      <main className="main">
        <div className="container">
          <h1>Bold Brands</h1>
          <div dangerouslySetInnerHTML={{ __html: `
        <section style="text-align: center; padding: 60px 20px;">
            <h1 style="font-size: 3rem; margin-bottom: 20px; color: #1a1a1a;">Make Your Brand <span style="color: #0066cc;">Bold</span></h1>
            <p style="font-size: 1.5rem; color: #666; max-width: 800px; margin: 0 auto 40px;">Professional websites and custom apparel that make your brand stand out</p>
        </section>

        <section style="max-width: 1200px; margin: 0 auto; padding: 40px 20px;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; margin-bottom: 60px;">
                <div style="text-align: center; padding: 30px; background: #f8f9fa; border-radius: 10px;">
                    <h3 style="color: #0066cc; margin-bottom: 15px;">🌐 Custom Websites</h3>
                    <p style="color: #666;">Professional, responsive websites built to showcase your brand and convert visitors into customers</p>
                </div>
                <div style="text-align: center; padding: 30px; background: #f8f9fa; border-radius: 10px;">
                    <h3 style="color: #0066cc; margin-bottom: 15px;">👕 Custom Apparel</h3>
                    <p style="color: #666;">High-quality branded merchandise that your team will love to wear and customers will want to buy</p>
                </div>
                <div style="text-align: center; padding: 30px; background: #f8f9fa; border-radius: 10px;">
                    <h3 style="color: #0066cc; margin-bottom: 15px;">🚀 Brand Growth</h3>
                    <p style="color: #666;">Complete brand solutions that help you grow your business and establish market presence</p>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%); padding: 60px 40px; border-radius: 15px; text-align: center; color: white;">
                <h2 style="font-size: 2.5rem; margin-bottom: 20px;">Ready to Make Your Brand Bold?</h2>
                <p style="font-size: 1.2rem; margin-bottom: 30px; opacity: 0.95;">Get a free consultation and quote for your project</p>
                
                <form style="max-width: 500px; margin: 0 auto; text-align: left;">
                    <input type="text" name="name" placeholder="Your Name" required style="width: 100%; padding: 15px; margin-bottom: 15px; border: none; border-radius: 5px; font-size: 1rem;" />
                    <input type="email" name="email" placeholder="Email Address" required style="width: 100%; padding: 15px; margin-bottom: 15px; border: none; border-radius: 5px; font-size: 1rem;" />
                    <input type="tel" name="phone" placeholder="Phone Number" style="width: 100%; padding: 15px; margin-bottom: 15px; border: none; border-radius: 5px; font-size: 1rem;" />
                    <select name="interest" required style="width: 100%; padding: 15px; margin-bottom: 15px; border: none; border-radius: 5px; font-size: 1rem;">
                        <option value="">What are you interested in?</option>
                        <option value="website">Custom Website</option>
                        <option value="apparel">Custom Apparel</option>
                        <option value="both">Both Website & Apparel</option>
                    </select>
                    <textarea name="message" placeholder="Tell us about your brand and project..." rows="4" style="width: 100%; padding: 15px; margin-bottom: 20px; border: none; border-radius: 5px; font-size: 1rem; resize: vertical;"></textarea>
                    <button type="submit" style="width: 100%; padding: 18px; background: white; color: #0066cc; border: none; border-radius: 5px; font-size: 1.1rem; font-weight: bold; cursor: pointer;">Get Your Free Quote</button>
                </form>
            </div>
        </section>

        <section style="max-width: 800px; margin: 60px auto; padding: 0 20px; text-align: center;">
            <h2 style="margin-bottom: 30px; color: #1a1a1a;">Why Choose Bold Brands?</h2>
            <div style="text-align: left; color: #666; line-height: 1.8;">
                <p>✓ <strong>Fast Turnaround:</strong> Get your website or apparel samples quickly</p>
                <p>✓ <strong>Quality First:</strong> Premium materials and modern designs</p>
                <p>✓ <strong>Affordable Pricing:</strong> Competitive rates without compromising quality</p>
                <p>✓ <strong>Expert Support:</strong> Dedicated team to bring your vision to life</p>
            </div>
        </section>
        ` }} />
        </div>
      </main>
      
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Bold Brands. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
