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
      <footer className="bg-foreground text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">© 2024 Brew Haven. All rights reserved.</p>
          <p className="text-white/70">Crafting the perfect cup, one espresso shot at a time ☕</p>
        </div>
      </footer>
    </div>
  );
}
