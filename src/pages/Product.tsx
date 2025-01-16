import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { GradientBackground } from '../components/GradientBackground';
import { Button } from '@/components/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/tabs';

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const product = {
    id: id,
    name: 'Urban Street Jacket',
    price: 129.99,
    description: 'Premium street-style jacket perfect for any casual occasion. Designed for the modern urban explorer, this jacket combines style with functionality.',
    details: 'Made with 100% sustainable materials, water-resistant outer layer, and breathable inner lining. Features multiple pockets for convenience.',
    care: 'Machine wash cold. Tumble dry low. Do not bleach. Iron on low heat if needed.',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
      'https://images.unsplash.com/photo-1591047139456-632e9425c667',
      'https://images.unsplash.com/photo-1591047140214-10392bce53f0',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Gray'],
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <GradientBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <Button 
          variant="ghost"
          onClick={() => window.history.back()}
          className="text-white mb-6 hover:bg-white/10"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Video
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-black/20 backdrop-blur-xl p-8 rounded-2xl shadow-2xl text-white">
          {/* Image Gallery Section */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <img
                src={product.images[currentImageIndex]}
                alt={`${product.name} - View ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full backdrop-blur-sm transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full backdrop-blur-sm transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex gap-2 overflow-x-auto py-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                    index === currentImageIndex ? 'ring-2 ring-white' : 'opacity-70'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold">{product.name}</h1>
                <p className="text-3xl font-medium mt-2">${product.price}</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" className="text-black border-white/20 hover:bg-white/10">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="text-black border-white/20 hover:bg-white/10">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-white/10">
                <TabsTrigger value="description" className="data-[state=active]:bg-white/20">Description</TabsTrigger>
                <TabsTrigger value="details" className="data-[state=active]:bg-white/20">Details</TabsTrigger>
                <TabsTrigger value="care" className="data-[state=active]:bg-white/20">Care</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="text-base mt-4">
                {product.description}
              </TabsContent>
              <TabsContent value="details" className="text-base mt-4">
                {product.details}
              </TabsContent>
              <TabsContent value="care" className="text-base mt-4">
                {product.care}
              </TabsContent>
            </Tabs>

            <div className="space-y-6 pt-4">
              <div>
                <h3 className="text-lg font-medium mb-3">Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "secondary" : "outline"}
                      onClick={() => setSelectedSize(size)}
                      className={`border-white/20 text-black hover:bg-white/20 ${
                        selectedSize === size ? 'bg-white/20' : ''
                      }`}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Color</h3>
                <div className="grid grid-cols-3 gap-2">
                  {product.colors.map((color) => (
                    <Button
                      key={color}
                      variant={selectedColor === color ? "secondary" : "outline"}
                      onClick={() => setSelectedColor(color)}
                      className={`border-white/20 text-black hover:bg-white/20 ${
                        selectedColor === color ? 'bg-white/20' : ''
                      }`}
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-white text-black hover:bg-white/90 transition-colors text-lg py-6">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;