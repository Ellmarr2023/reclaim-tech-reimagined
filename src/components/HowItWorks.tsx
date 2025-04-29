
import React from "react";
import { Search, Camera, Headphones, Tv, Gamepad, Phone, ShoppingCart, Monitor, Laptop, Speaker, Drill, Smartphone } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Snap",
      description: "Take a photo of your device with our app",
      icon: <Camera className="h-8 w-8" />,
      detailedSteps: [
        "Open the Reclaim app on your smartphone",
        "Point your camera at the electronic device",
        "Make sure the entire device is in frame",
        "Tap the capture button to take a clear photo"
      ]
    },
    {
      id: 2,
      title: "Price",
      description: "Our AI finds the best price across all marketplaces",
      icon: <Search className="h-8 w-8" />,
      detailedSteps: [
        "Our AI instantly identifies your exact device model",
        "We scan dozens of marketplaces in real-time",
        "Advanced algorithms analyze pricing trends and demand",
        "You receive the highest possible valuation for your device"
      ]
    },
    {
      id: 3,
      title: "Sell",
      description: "We automatically list and sell your device for you",
      icon: <ShoppingCart className="h-8 w-8" />,
      detailedSteps: [
        "Select your preferred marketplace or let us choose",
        "We generate professional listings with optimized descriptions",
        "Your device is automatically listed at the ideal price point",
        "Once sold, we guide you through secure packaging and shipping"
      ]
    },
  ];

  const deviceExamples = [
    { 
      name: "Gaming Controllers", 
      icon: <Gamepad className="h-10 w-10 mb-2" />,
      description: "Xbox, PlayStation, Nintendo and more",
      image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=600&h=400&fit=crop"
    },
    { 
      name: "Headphones", 
      icon: <Headphones className="h-10 w-10 mb-2" />,
      description: "Over-ear, in-ear, wireless and wired",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop"
    },
    { 
      name: "Monitors", 
      icon: <Monitor className="h-10 w-10 mb-2" />,
      description: "Gaming monitors and professional displays",
      image: "https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?w=600&h=400&fit=crop"
    },
    { 
      name: "Smartphones", 
      icon: <Smartphone className="h-10 w-10 mb-2" />,
      description: "iPhones, Androids and other mobile devices",
      image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=600&h=400&fit=crop"
    },
    { 
      name: "Laptops", 
      icon: <Laptop className="h-10 w-10 mb-2" />,
      description: "MacBooks, Windows laptops and Chromebooks",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop"
    },
    { 
      name: "Speakers", 
      icon: <Speaker className="h-10 w-10 mb-2" />,
      description: "Bluetooth speakers, smart speakers and more",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&h=400&fit=crop"
    },
    { 
      name: "Power Tools", 
      icon: <Drill className="h-10 w-10 mb-2" />,
      description: "Drills, saws, sanders and other tools",
      image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&h=400&fit=crop"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="gradient-text">Reclaim</span> Works
          </h2>
          <p className="text-lg text-reclaim-darkgray max-w-2xl mx-auto">
            Our streamlined process makes selling your old electronics effortless
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${step.id * 0.1}s` }}
            >
              <div className="bg-reclaim-lightgray p-4 rounded-full mb-5 text-reclaim-blue">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-reclaim-darkgray mb-6">{step.description}</p>
              
              <div className="bg-gray-50 p-4 rounded-lg w-full">
                <h4 className="text-sm font-semibold mb-3 text-reclaim-blue">Step-by-Step:</h4>
                <ol className="text-left space-y-2 text-sm text-reclaim-darkgray">
                  {step.detailedSteps.map((detailStep, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-reclaim-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                        {index + 1}
                      </span>
                      <span>{detailStep}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Devices You Can <span className="gradient-text">Reclaim</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deviceExamples.map((device, index) => (
              <div 
                key={index} 
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={device.image} 
                    alt={device.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-center mb-2 text-reclaim-blue">
                    {device.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-center">{device.name}</h4>
                  <p className="text-reclaim-darkgray/80 text-sm text-center">{device.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
