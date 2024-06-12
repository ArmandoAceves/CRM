import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import './Sidebar.css'; // Asegúrate de que este archivo contiene estilos correctos y responsivos

const SidebarItem = ({ label, icon, children }) => (
    <li>
        <div className="sidebar-item">
            <div className="p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                <span className="flex align-items-center">
                    <i className={`pi ${icon} mr-2`}></i>
                    <span className="font-medium">{label}</span>
                </span>
                <i className="pi pi-chevron-down ml-auto chevron-icon"></i>
                <Ripple />
            </div>
            <ul className="list-none p-0 m-0 hidden overflow-hidden transition-all transition-duration-400 transition-ease-in-out">
                {children}
            </ul>
        </div>
    </li>
);

const SidebarLink = ({ label, icon }) => (
    <li>
        <a href="#!" className="sidebar-link p-ripple flex align-items-center p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
            <i className={`pi ${icon} mr-2`}></i>
            <span className="font-medium">{label}</span>
            <Ripple />
        </a>
    </li>
);

const Sidebar1 = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} className="barra">
                <div className='flex flex-wrap align-items-center justify-content-between flex-shrink-0'>
                    <img src="./Img/Logo.webp" alt="Logo de BDS" className="logo" />
                    <h2 className='nombre'>Fútbol Fino</h2>
                </div>
                <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                <h2>Menú</h2>
                <div className="overflow-y-auto">
                    <ul className="list-none p-3 m-0">
                        <SidebarItem label="Favoritos" icon="pi pi-star">
                            <SidebarLink label="Tablero" icon="pi pi-home" />
                            <SidebarLink label="Marcadores" icon="pi pi-bookmark" />
                            <SidebarItem label="Informes" icon="pi pi-chart-line">
                                <SidebarItem label="Ingresos" icon="pi pi-chart-line">
                                    <SidebarLink label="Vista" icon="pi pi-table" />
                                    <SidebarLink label="Buscar" icon="pi pi-search" />
                                </SidebarItem>
                                <SidebarLink label="Gastos" icon="pi pi-chart-line" />
                            </SidebarItem>
                            <SidebarLink label="Equipo" icon="pi pi-users" />
                            <SidebarLink label="Mensajes" icon="pi pi-comments" />
                            <SidebarLink label="Calendario" icon="pi pi-calendar" />
                            <SidebarLink label="Configuraciones" icon="pi pi-cog" />
                        </SidebarItem>
                    </ul>
                    <ul className="list-none p-3 m-0">
                        <SidebarItem label="Aplicación" icon="pi pi-th-large">
                            <SidebarLink label="Proyectos" icon="pi pi-folder" />
                            <SidebarLink label="Desempeño" icon="pi pi-chart-bar" />
                        </SidebarItem>
                    </ul>
                </div>
            </Sidebar>
            <Button icon="pi pi-bars" onClick={() => setVisible(true)} className="menu-button" />
        </div>
    );
};

export default Sidebar1;