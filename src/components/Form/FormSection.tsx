import { createFormHook, createFormHookContexts } from '@tanstack/react-form';
import { FormInput, FormSelect, FormButton } from './';
import { z } from 'zod';

const { fieldContext, formContext } = createFormHookContexts();

const { useAppForm } = createFormHook({
  fieldComponents: {
    FormInput,
    FormSelect,
  },
  formComponents: {
    FormButton,
  },
  fieldContext,
  formContext,
});

export const FormSection = () => {
  const form = useAppForm({
    defaultValues: {
      capital: 0,
      benefitType: '',
      duration: 0,
    },
    validators: {
      onChange: z.object({
        capital: z.number().min(1, 'El capital debe ser mayor a 0'),
        benefitType: z.string().nonempty('El tipo de beneficio es requerido'),
        duration: z.number().min(1, 'La duración debe ser mayor a 0'),
      }),
    },
    onSubmit: ({ value }) => {
      console.log('Formulario enviado:', value);
    },
  });

  
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <section className="w-full h-fit">
        <div className="flex flex-col h-fit md:flex-row items-center justify-evenly bg-gradient-to-r from-blue-400 via-sky-300 to-blue-400 rounded-2xl mx-4 p-4 shadow-lg border border-blue-500">
          {/* Campo Capital */}
          <form.AppField
            name="capital"
            children={(field) => (
              <field.FormInput
                label="Capital"
                value={field.state.value}
                handleChange={(value: string | number) => {
                  const numericValue =
                    typeof value === 'string'
                      ? value === '' ? 0 : parseFloat(value)
                      : value;
                  field.handleChange(numericValue);
                }}
              />
            )}
          />

          {/* Campo Type de Beneficio */}
          <form.AppField
            name="benefitType"
            children={(field) => (
              <field.FormSelect
                label="Tipo de Beneficio"
                value={field.state.value}
                handleChange={(value: string | number) => field.handleChange(String(value))}
                options={[
                  { value: '', label: 'Selecciona el tipo de beneficio' },
                  { value: 'simple', label: 'Beneficio de Interes Simple' },
                  { value: 'compound', label: 'Beneficio de Interes Compuesto' },
                ]}
                borderColor="red-500"
                focusColor="red-500"
                helperText="" // Puedes ajustar según tus necesidades
                helperTextColor="red-600"
                icon={null}
              />
            )}
          />

          {/* Campo Duración */}
          <form.AppField
            name="duration"
            children={(field) => (
              <field.FormSelect
                label="Tiempo de Duración"
                value={field.state.value}
                handleChange={(value: string | number) => {
                  const numericValue =
                    typeof value === 'string'
                      ? value === '' ? 0 : parseFloat(value)
                      : value;
                  field.handleChange(numericValue);
                }}
                options={[
                  { value: 0, label: 'Seleccione el tiempo' },
                  { value: 1, label: '1 mes' },
                  { value: 3, label: '3 meses' },
                  { value: 6, label: '6 meses' },
                  { value: 9, label: '9 meses' },
                  { value: 12, label: '12 meses' },
                ]}
                borderColor="teal-500"
                focusColor="teal-500"
              />
            )}
          />

          <form.AppForm>
            <form.FormButton label="Calcular" />
          </form.AppForm>
        </div>
      </section>
    </form>
  );
};