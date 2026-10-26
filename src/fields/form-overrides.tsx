import type { Field, ArrayField } from 'payload'

export const formOverrides = ({ defaultFields }: { defaultFields: Field[] }): Field[] => {
  return defaultFields.flatMap((field) => {
    if ('name' in field && field.name === 'emails' && field.type === 'array') {
      const emailsField = { ...field } as ArrayField
      emailsField.admin = {
        ...emailsField.admin,
        description: "Send custom emails when the form submits. Use comma separated lists to send the same email to multiple recipients. To reference a value from this form, wrap that field's name with double curly brackets, i.e. {{firstName}}. Handlebars expressions are supported.",
      }

      if (Array.isArray(emailsField.fields)) {
        emailsField.fields = emailsField.fields.flatMap((f: any) => {
          if (f.name === 'message') {
            const modifiedMessage = {
              ...f,
              admin: {
                ...f.admin,
                condition: (_: any, siblingData: any) => siblingData?.messageType !== 'html',
              },
            }

            return [
              {
                name: 'messageType',
                type: 'select',
                options: [
                  { label: 'Rich Text', value: 'rich_text' },
                  { label: 'Custom HTML', value: 'html' },
                ],
                defaultValue: 'rich_text',
                required: true,
              },
              modifiedMessage,
              {
                name: 'htmlMessage',
                type: 'code',
                label: 'HTML Message',
                localized: true,
                admin: {
                  condition: (_: any, siblingData: any) => siblingData?.messageType === 'html',
                  language: 'html',
                },
              },
            ]
          }
          return [f]
        }) as any
      }
      return [emailsField]
    }
    return [field]
  })
}
