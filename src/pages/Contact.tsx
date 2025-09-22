import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Message sent! (This is a mock submission)');
  };

  return (
    <div className="min-h-[calc(100vh-120px)] py-8">
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="bg-white/80 backdrop-blur-md dark:bg-gray-800/80 shadow-lg rounded-xl p-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Get in Touch
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
              <Mail className="h-6 w-6 text-blue-500" />
              <span>support@weatherapp.com</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
              <Phone className="h-6 w-6 text-purple-500" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-start space-x-4 text-gray-700 dark:text-gray-300">
              <MapPin className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <span>123 Weather Forecast Lane, Cloud City, CA 90210</span>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Business Hours</h3>
              <p className="text-gray-700 dark:text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM (PST)</p>
              <p className="text-gray-700 dark:text-gray-300">Saturday - Sunday: Closed</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-md dark:bg-gray-800/80 shadow-lg rounded-xl p-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Send us a Message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Name</Label>
                <Input id="name" placeholder="Your Name" required className="mt-1 bg-white/60 dark:bg-gray-700/60 border-gray-300 dark:border-gray-600" />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" required className="mt-1 bg-white/60 dark:bg-gray-700/60 border-gray-300 dark:border-gray-600" />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={5} required className="mt-1 bg-white/60 dark:bg-gray-700/60 border-gray-300 dark:border-gray-600" />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}