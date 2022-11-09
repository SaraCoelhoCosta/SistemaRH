import React from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <HomeOutlinedIcon />,
        link: "/home"
    },
    {
        title: "Cadastrar Candidatos",
        icon: <PersonOutlineOutlinedIcon />,
        link: "/candidato"
    },
    {
        title: "Revisar Candidatos",
        icon: <FolderOutlinedIcon />,
        link: "/revisaoCandidato"
    },
    {
        title: "Criar Vaga",
        icon: <PeopleAltOutlinedIcon />,
        link: "/vaga"
    },
    {
        title: "Objetivo da Vaga",
        icon: <PeopleAltOutlinedIcon />,
        link: "/vagaObjetivo"
    },
    {
        title: "Adicionar Candidato",
        icon: <PeopleAltOutlinedIcon />,
        link: "/adicionarCandidato"
    },
    {
        title: "Configurações",
        icon: <SettingsOutlinedIcon />,
        link: "#"
    },
]