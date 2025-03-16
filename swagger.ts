import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Memory sprint API',
            version: '1.0.0',
        },
        servers: [
            {
                url: process.env.HOST || 'http://localhost:4000/api', // URL вашего сервера
                description: 'Local',
            },
        ],
        components: {
            securitySchemes: {
                ApiKeyAuth: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'x-api-key',
                },
            },
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        _id: {
                            type: 'string',
                            description: 'Уникальный идентификатор пользователя',
                        },
                        email: {
                            type: 'string',
                            description: 'Email пользователя',
                        },
                        nickname: {
                            type: 'string',
                            description: 'Никнейм пользователя',
                        },
                        phone: {
                            type: 'string',
                            description: 'Телефон пользователя',
                        },
                        age: {
                            type: 'number',
                            description: 'Возраст пользователя',
                        },
                        points: {
                            type: 'number',
                            description: 'Баллы пользователя',
                        },
                        isActive: {
                            type: 'boolean',
                            description: 'Статус активности пользователя',
                        },
                        progress: {
                            $ref: '#/components/schemas/Progress',
                        },
                        created_at: {
                            type: 'string',
                            format: 'date-time',
                            description: 'Дата создания пользователя',
                        },
                    },
                },
                Progress: {
                    type: 'object',
                    properties: {
                        completedExercises: {
                            type: 'array',
                            items: {
                                $ref: '#/components/schemas/CompletedExercise',
                            },
                        },
                        incompleteExercises: {
                            type: 'array',
                            items: {
                                $ref: '#/components/schemas/IncompleteExercise',
                            },
                        },
                        totalScore: {
                            type: 'number',
                            description: 'Общее количество баллов',
                        },
                    },
                },
                CompletedExercise: {
                    type: 'object',
                    properties: {
                        exerciseId: {
                            type: 'number',
                            description: 'ID завершенного упражнения',
                        },
                        score: {
                            type: 'number',
                            description: 'Баллы за упражнение',
                        },
                        completedAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'Дата завершения упражнения',
                        },
                    },
                },
                IncompleteExercise: {
                    type: 'object',
                    properties: {
                        exerciseId: {
                            type: 'number',
                            description: 'ID незавершенного упражнения',
                        },
                        progress: {
                            type: 'number',
                            description: 'Процент выполнения упражнения (0-100)',
                        },
                    },
                },
            },
        },
        security: [
            {
                ApiKeyAuth: [],
            },
        ],
    },
    apis: ['./src/routes/*.ts'], // Указываем путь к файлам с роутами
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;
