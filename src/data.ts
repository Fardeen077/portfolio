export interface projectImage {
    src: string
}

export interface Project {
    id: number,
    title: string,
    description: string,
    images: projectImage[]
}