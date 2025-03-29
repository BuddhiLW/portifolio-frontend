"use client"

import type { Meta, StoryObj } from "@storybook/react"
import Projects from "./Projects"
import { WithProviders, WithDarkTheme } from "../../../.storybook/decorators"

// Mock Projeto type for storybook
const mockProjects = [
  {
    id: "1",
    nome: "Project 1",
    descricao: "Description of project 1",
    resumo: "Summary of project 1",
    dataInicio: "2023-01-01",
    dataFim: "2023-12-31",
    destaque: true,
    site: "https://example.com",
    repositorio: "https://github.com/example/project1",
    tipo: ["WEB"],
    tecnologias: [1, 2, 3],
    imagens: ["/images/main.webp"],
  },
  {
    id: "2",
    nome: "Project 2",
    descricao: "Description of project 2",
    resumo: "Summary of project 2",
    dataInicio: "2022-01-01",
    dataFim: "2022-12-31",
    destaque: true,
    site: "https://example2.com",
    repositorio: "https://github.com/example/project2",
    tipo: ["MOBILE"],
    tecnologias: [3, 4, 5],
    imagens: ["/images/main.webp"],
  },
  {
    id: "3",
    nome: "Project 3",
    descricao: "Description of project 3",
    resumo: "Summary of project 3",
    dataInicio: "2021-01-01",
    dataFim: "2021-12-31",
    destaque: false,
    site: "https://example3.com",
    repositorio: "https://github.com/example/project3",
    tipo: ["DESKTOP"],
    tecnologias: [1, 5],
    imagens: ["/images/main.webp"],
  }
]

const meta = {
  title: "Components/Projects",
  component: Projects,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [WithProviders],
} satisfies Meta<typeof Projects>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Featured Projects",
    list: mockProjects,
    translationKey: "featured",
  },
}

export const DarkMode: Story = {
  args: {
    title: "Featured Projects",
    list: mockProjects,
    translationKey: "featured",
  },
  decorators: [WithDarkTheme],
}