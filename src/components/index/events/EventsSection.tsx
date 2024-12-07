import React, { useState, useEffect } from 'react';

interface Event {
    id: number;
    categoryId:number;
    name: string;
    imagePath: string;
    enabled: boolean;
}

interface Category {
    id: number;
    titulo: string;
    icono: string;
}

const categories: Category[] = [
    { id: 8, titulo: "Aeropuerto", icono: "fas fa-plane" },
    { id: 9, titulo: "Visita turística", icono: "fas fa-suitcase" },
    { id: 10, titulo: "Shopping tour", icono: "fas fa-shopping-bag" },
    { id: 11, titulo: "Business", icono: "fas fa-briefcase" },
    { id: 12, titulo: "Bodas", icono: "fas fa-ring" },
    { id: 13, titulo: "Eventos y congresos", icono: "fas fa-users" },
];

const EventsSection = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

    const apiUrlUploads = 'http://localhost:3000/uploads/'

    const fetchEventsByCategory = async (categoryId: number) => {
        try {
            const response = await fetch(`http://localhost:3000/unauth/events/category/${categoryId}`);
            const data = await response.json();
            setEvents(data)
        } catch (error) {
            console.error('Error al cargar eventos:', error)
        }
    }

    const handleCategoryClick = (categoryId: number) => {
        if (selectedCategory !== categoryId) {
            setSelectedCategory(categoryId)
            fetchEventsByCategory(categoryId)
        }
    };

    return (

        <section className="max-w-screen-xl mx-auto -mt-28 px-10 relative z-10">
            <div className="text-center p-12 mb-14 bg-white rounded shadow-xl">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    {categories.map((category) => (
                        <div 
                            key={category.id}
                            onClick={() => handleCategoryClick(category.id)}
                            className="cursor-pointer"
                        >
                            <div className="flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2 group">
                                <div className="bg-gradient-to-b from-red-800 to-red-600 w-20 h-20 rounded-full mb-3 flex items-center justify-center">
                                    <i className={`${category.icono} text-white text-4xl`}></i>
                                </div>
                                <div className="flex flex-col items-center">
                                   <span className="text-black group-hover:text-red-600">{category.titulo}</span>
                                    {selectedCategory === category.id && (
                                        <div className="w-full h-1 bg-red-600 mt-2 rounded"></div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.length >0 ? (
                    events.map((event, index) => (
                        <div key={event.id} className="w-full flex flex-row justify-center">
                            <div className="bg-white rounded-lg shadow-md max-w-sm">
                                <div className="overflow-hidden rounded-t-lg">
                                    <img 
                                        src={apiUrlUploads + event.imagePath} 
                                        alt={event.name} 
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl mb-2">{event.name}</h3>
                                    <div className="w-24 h-1 bg-red-600 rounded"></div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No hay eventos para mostrar</div>
                )}
            </div>
        </section>
    )
}

export default EventsSection;
