import { Coffee, Clock, MapPin, Phone, Mail, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Brew Haven</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#menu" className="text-foreground hover:text-primary transition">Menu</a>
            <a href="#hours" className="text-foreground hover:text-primary transition">Hours</a>
            <a href="#contact" className="text-foreground hover:text-primary transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-b from-primary to-primary/80 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1495474472645-4d71bcdd2085?w=1920&h=1080&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Brew Haven</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">Artisan Coffee, Crafted with Passion</p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Order Now
          </Button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Menu</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Espresso Drinks */}
            <div className="bg-secondary/10 p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Coffee className="w-6 h-6" /> Espresso Drinks
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'Espresso', price: '$2.50' },
                  { name: 'Americano', price: '$3.00' },
                  { name: 'Cappuccino', price: '$4.50' },
                  { name: 'Latte', price: '$4.75' },
                  { name: 'Macchiato', price: '$4.00' }
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-center pb-2 border-b border-border/30">
                    <span className="text-foreground font-medium">{item.name}</span>
                    <span className="text-primary font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialty Drinks */}
            <div className="bg-accent/10 p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Specialty Drinks</h3>
              <div className="space-y-4">
                {[
                  { name: 'Mocha', price: '$5.00' },
                  { name: 'Caramel Macchiato', price: '$5.25' },
                  { name: 'Vanilla Latte', price: '$5.00' },
                  { name: 'Cold Brew', price: '$3.75' },
                  { name: 'Affogato', price: '$5.50' }
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-center pb-2 border-b border-border/30">
                    <span className="text-foreground font-medium">{item.name}</span>
                    <span className="text-primary font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pastries */}
          <div className="mt-8 bg-muted/20 p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-primary mb-6">Pastries & Snacks</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Croissant', price: '$3.50' },
                { name: 'Blueberry Muffin', price: '$4.00' },
                { name: 'Chocolate Chip Cookie', price: '$2.50' },
                { name: 'Banana Bread', price: '$3.75' },
                { name: 'Almond Biscotti', price: '$3.00' },
                { name: 'Cheese Danish', price: '$4.25' }
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{item.name}</span>
                  <span className="text-primary font-bold">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section id="hours" className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Hours of Operation</h2>
          
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg border border-border shadow-sm">
            <div className="space-y-4">
              {[
                { day: 'Monday - Friday', hours: '7:00 AM - 8:00 PM' },
                { day: 'Saturday', hours: '8:00 AM - 9:00 PM' },
                { day: 'Sunday', hours: '8:00 AM - 7:00 PM' },
                { day: 'Holidays', hours: 'Closed' }
              ].map((item) => (
                <div key={item.day} className="flex justify-between items-center pb-4 border-b border-border/30 last:border-b-0">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">{item.day}</span>
                  </div>
                  <span className="text-secondary font-medium">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Get In Touch</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Location */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg border border-border text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">123 Coffee Street<br />Brew City, BC 12345</p>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 rounded-lg border border-border text-center">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground">(555) 123-4567</p>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 rounded-lg border border-border text-center">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">hello@brewhaven.com</p>
            </div>
          </div>

          {/* Reviews Preview */}
          <div className="bg-muted/20 p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Customer Reviews</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Sarah M.', review: 'Best coffee in town! The baristas are so friendly and the atmosphere is perfect for working.', rating: 5 },
                { name: 'James T.', review: 'Consistently excellent quality. My go-to spot every morning before work.', rating: 5 },
                { name: 'Emma L.', review: 'Love the pastries here! Fresh daily and pairs perfectly with their lattes.', rating: 5 }
              ].map((item) => (
                <div key={item.name} className="bg-white p-6 rounded-lg border border-border">
                  <div className="flex gap-1 mb-3">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">{item.review}</p>
                  <p className="font-semibold text-foreground">— {item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h4 className="font-bold text-lg mb-3">Brew Haven</h4>
              <p className="text-white/70 text-sm">Crafting the perfect cup, one espresso shot at a time ☕</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#menu" className="text-white/70 hover:text-white transition">Menu</a></li>
                <li><a href="#hours" className="text-white/70 hover:text-white transition">Hours</a></li>
                <li><a href="#contact" className="text-white/70 hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-bold text-lg mb-3">Follow Us</h4>
              <div className="flex justify-start gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.894 8.221c.004.126.006.252.006.378 0 3.863-2.938 8.33-8.33 8.33-1.654 0-3.19-.485-4.488-1.313.23.027.464.042.701.042 1.372 0 2.638-.467 3.643-1.25-1.281-.024-2.365-.871-2.737-2.037.18.028.364.044.552.044.267 0 .526-.036.775-.103-1.338-.268-2.344-1.45-2.344-2.866v-.036c.395.22.847.352 1.33.367-.784-.524-1.302-1.416-1.302-2.427 0-.535.143-1.036.394-1.466 1.442 1.771 3.599 2.938 6.02 3.063-.025-.11-.04-.225-.04-.343 0-1.61 1.306-2.916 2.916-2.916.839 0 1.597.354 2.129.923.664-.13 1.29-.371 1.852-.703-.217.68-.68 1.25-1.281 1.612.59-.07 1.154-.227 1.68-.46-.391.587-.887 1.1-1.456 1.513z"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/70 text-sm">© 2024 Brew Haven. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
