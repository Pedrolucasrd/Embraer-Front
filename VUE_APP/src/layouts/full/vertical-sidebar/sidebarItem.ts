import { getUserInfo } from '@/data/logged';
import {
    ApertureIcon,
    ChartBarIcon,
    CopyIcon,
    LayoutDashboardIcon, LoginIcon, MoodHappyIcon, TypographyIcon, UserPlusIcon, UsersIcon
} from 'vue-tabler-icons';

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    { header: 'Home' },
    {
        title: 'Dashboard',
        icon: LayoutDashboardIcon,
        to: '/'
    },
    { header: 'auth' },
    {
        title: 'Login',
        icon: LoginIcon,
        to: '/auth/login'
    },
    {
        title: 'Icons',
        icon: MoodHappyIcon,
        to: '/icons'
    },
];

import { ref } from 'vue';
const role = ref('');
const userRole = await getUserInfo();
  if (userRole === 'ROLE_USER') {
    role.value = 'user';
    sidebarItem.push(
    {header: 'Utilities'},
    {
      title: 'Opção do usuário',
      icon: UsersIcon,
      to: '/opcao-usuario'
    });
    
} else if (userRole === 'ROLE_ADMIN') {
    role.value = 'admin';
    sidebarItem.push(
    {header: 'Utilities'},
    {
        title: 'Statistics',
        icon: ChartBarIcon,
        to: '/statistic'
    },
    {
        title: 'Users Manager',
        icon: UsersIcon,
        to: '/userManager'
    });

  } else if (userRole === 'ROLE_EDITOR') {
    role.value = 'editor';
    sidebarItem.push(
    {header: 'Utilities'},
    {
      title: 'Opção do editor',
      icon: UsersIcon,
      to: '/opcao-editor'
    });
  }
export default sidebarItem;
