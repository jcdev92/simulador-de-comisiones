import { z } from 'zod';
import { createFormHook, createFormHookContexts } from '@tanstack/react-form';
import { FormInput, FormSelect, FormButton } from './';
import { resetSimulationStore, updateSimulationForm } from '../../stores/simulationStore';

const { fieldContext, formContext } = createFormHookContexts();

const { useAppForm } = createFormHook({
  fieldComponents: { FormInput, FormSelect },
  formComponents: { FormButton },
  fieldContext,
  formContext,
});

export const FormSection = () => {
  const form = useAppForm({
    defaultValues: {
      capitalSeed: 0,
      benefitType: '',
      duration: 0,
    },
    validators: {
      onChange: z.object({
        capitalSeed: z.number().min(1, 'El capital debe ser mayor a 0'),
        benefitType: z.string().nonempty('El tipo de beneficio es requerido'),
        duration: z.number().min(1, 'La duración debe ser mayor a 0'),
      }),
    },
    onSubmit: ({ value }) => {
      const { capitalSeed, benefitType, duration } = value;
      updateSimulationForm({ capitalSeed, benefitType, duration });
    },
  });

  const handleReset = () => {
    form.reset();
    resetSimulationStore();
  };


  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <section className="w-full h-fit">
        <div className="flex flex-col gap-8 h-fit md:flex-row items-center justify-evenly bg-gradient-to-r bg-sky-600 rounded-2xl mx-4 p-8 shadow-lg border border-blue-500">
          <form.AppField
            name="capitalSeed"
            children={(field) => (
              <field.FormInput
                label="Capital Semilla"
                value={field.state.value}
                handleChange={(value: string | number) => {
                  const numericValue =
                    typeof value === 'string'
                      ? value === '' ? 0 : parseFloat(value)
                      : value;
                  field.handleChange(numericValue);
                }}
                helperText={field.state.meta.errors[0]?.message}
              />
            )}
          />

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
                labelColor="text-red-600"
                borderColor="border-red-500"
                focusColor="border-red-500"
                helperText={field.state.meta.errors[0]?.message}
                helperTextColor={field.state.meta.errors[0] ? 'text-red-600' : 'text-teal-600'}
                icon={null}
              />
            )}
          />

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
                  { value: 3, label: '3 meses' },
                  { value: 6, label: '6 meses' },
                  { value: 9, label: '9 meses' },
                  { value: 12, label: '12 meses' },
                ]}
                labelColor="text-teal-500"
                borderColor="border-teal-500"
                focusColor="border-teal-500"
                helperText={field.state.meta.errors[0]?.message}
                helperTextColor={field.state.meta.errors[0] ? 'text-red-600' : 'text-teal-600'}
                icon={null}
              />
            )}
          />
          <form.AppForm>
            <form.FormButton label="Calcular" type="submit" color="bg-green-500" hoverColor="hover:bg-green-600" focusColor="focus:ring-green-400" />
            <form.FormButton label="Reset" type="button" onClick={handleReset} color="bg-red-500" hoverColor='hover:bg-red-600' />
          </form.AppForm>
        </div>
      </section>
    </form>
  );
};