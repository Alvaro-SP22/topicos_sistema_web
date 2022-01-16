import React from 'react'
import { Menu, MenuItem, ProSidebar, SidebarContent, SidebarHeader, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Typography from '@mui/material/Typography'
import styles from './page.module.css'
import sidebarImage from '../../assets/img/img_sidebar.png'
import users from '../../assets/img/users.png'
import categories from '../../assets/img/categories.png'
import products from '../../assets/img/products.jpeg'
import customers from '../../assets/img/customers.png'
import sales from '../../assets/img/sales.png'
import { Link } from 'react-router-dom';
import { Paths } from '../../constants/route-paths';

interface IOwnProps{
    children?: any
}

const User = () => ( <img src={users} width='20px'/> )
const Category = () => ( <img src={categories} width='20px'/> )
const Product = () => ( <img src={products} width='20px'/> )
const Customer = () => ( <img src={customers} width='20px'/> )
const Sale = () => ( <img src={sales} width='20px'/> )

const Page: React.FC<IOwnProps> = ({ children }) => {
    return (
        <div className={styles.sidebarWrapper}>
            <ProSidebar breakPoint='md' image={sidebarImage}>
                <SidebarHeader>
                    <Typography>Calzados Maricielo</Typography>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="circle">
                        <SubMenu  icon={<User />} title="Usuarios">
                            <MenuItem>
                                Crear
                                <Link to={Paths.DASHBOARD.USERS.CREATE} />
                            </MenuItem>
                            <MenuItem>
                                Editar
                                <Link to={Paths.DASHBOARD.USERS.UPDATE} />
                            </MenuItem>
                            <MenuItem>
                                Listar
                                <Link to={Paths.DASHBOARD.USERS.LIST} />
                            </MenuItem>
                        </SubMenu>
                        <SubMenu  icon={<Category />} title="Categorias">
                            <MenuItem>Crear</MenuItem>
                            <MenuItem>Editar</MenuItem>
                            <MenuItem>Listar</MenuItem>
                        </SubMenu>
                        <SubMenu  icon={<Product />} title="Productos">
                            <MenuItem>Crear</MenuItem>
                            <MenuItem>Editar</MenuItem>
                            <MenuItem>Listar</MenuItem>
                        </SubMenu>
                        <SubMenu  icon={<Customer />} title="Clientes">
                            <MenuItem>Crear</MenuItem>
                            <MenuItem>Editar</MenuItem>
                            <MenuItem>Listar</MenuItem>
                        </SubMenu>
                        <SubMenu  icon={<Sale />} title="Ventas">
                            <MenuItem>Crear</MenuItem>
                            <MenuItem>Editar</MenuItem>
                            <MenuItem>Listar</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
            <div className={styles.bodyWrapper}>
                {children}
            </div>
        </div>
    )
}

export default Page
