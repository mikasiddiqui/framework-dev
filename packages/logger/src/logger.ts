export interface LoggerOptions {
    repository: string
    pkg: string
    instance: string
    environment: string
}

export class Logger {
    private pkg: string
    private instance: string
    private repository: string

    private environment: string

    constructor({ repository, pkg, instance, environment }: LoggerOptions) {
        this.repository = repository
        this.pkg = pkg
        this.instance = instance
        this.environment = environment
    }

    private format(level: 'info' | 'warn' | 'error', message: string, context?: any) {
        return `[${level}] ${new Date().toLocaleString()}  - ${this.instance} - ${this.environment} - @${this.repository}/${this.pkg} - ${message} ${
            context ? ` - ${JSON.stringify(context)}` : ''
        }`
    }

    public log(level: 'info' | 'warn' | 'error', message: string, context?: any) {
        const log = this.format(level, message, context)

        switch (level) {
            case 'info': {
                console.log(log)
                break
            }

            case 'warn': {
                console.warn(log)
                break
            }

            case 'error': {
                console.error(log)
                break
            }
        }
    }
}
