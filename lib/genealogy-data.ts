export interface Person {
    id: string;
    name: string;
    title?: string; // e.g., "First Man", "Patriarch"
    spouse?: string;
    children?: Person[];
    meaning?: string;
}

export const genealogyData: Person = {
    id: "adam",
    name: "Adán",
    title: "El Primer Hombre",
    spouse: "Eva",
    children: [
        {
            id: "seth",
            name: "Set",
            title: "Hijo de la Promesa",
            children: [
                {
                    id: "noah",
                    name: "Noé",
                    title: "Constructor del Arca",
                    meaning: "Consuelo",
                    children: [
                        { id: "shem", name: "Sem", title: "Ancestro de Abraham" },
                        { id: "ham", name: "Cam" },
                        { id: "japheth", name: "Jafet" },
                        {
                            id: "terah", // Skipping generations for valid visual brevity
                            name: "Terah",
                            children: [
                                {
                                    id: "abraham",
                                    name: "Abraham",
                                    title: "Padre de la Fe",
                                    spouse: "Sara",
                                    children: [
                                        {
                                            id: "isaac",
                                            name: "Isaac",
                                            title: "Hijo de la Risa",
                                            spouse: "Rebeca",
                                            children: [
                                                {
                                                    id: "jacob",
                                                    name: "Jacob (Israel)",
                                                    title: "Padre de las 12 Tribus",
                                                    spouse: "Lea y Raquel",
                                                    children: [
                                                        { id: "ruben", name: "Rubén" },
                                                        { id: "simeon", name: "Simeón" },
                                                        { id: "levi", name: "Leví", title: "Sacerdotes" },
                                                        { id: "judah", name: "Judá", title: "Linaje Real" },
                                                        { id: "dan", name: "Dan" },
                                                        { id: "naphtali", name: "Neftalí" },
                                                        { id: "gad", name: "Gad" },
                                                        { id: "asher", name: "Aser" },
                                                        { id: "issachar", name: "Isacar" },
                                                        { id: "zebulun", name: "Zabulón" },
                                                        { id: "joseph", name: "José", title: "Goberbante de Egipto" },
                                                        { id: "benjamin", name: "Benjamín" },
                                                    ]
                                                },
                                                { id: "esau", name: "Esaú" }
                                            ]
                                        },
                                        { id: "ishmael", name: "Ismael" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        { id: "cain", name: "Caín" },
        { id: "abel", name: "Abel" }
    ]
};
