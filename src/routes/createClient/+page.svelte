<script>
import { db } from '$lib/firebase';
import { createForm } from "svelte-forms-lib";
import { navigate } from '$app/navigation';

const industries = [
  "Software",
  "Healthcare",
  "Finance",
  "Education",
  "Other",
];
const services = [
  "Web Development",
  "Digital Marketing",
  "SEO",
  "Branding",
  "Graphic Design",
];

const form = createForm({
  initialValues: {
    name: "",
    email: "",
    company: "",
    industry: "",
    socialMedia: "",
    requestedServices: [],
  },
  onSubmit: (values) => {
    addClient(values);
  },
});

async function addClient(client) {
  await db.collection("clients").push(client);
  //navigate("/clients");
}
</script>

<h1>Create Client</h1>

<form use:form>
  <label>
    Name:
    <input type="text" bind:value={form.values.name} />
  </label>

  <label>
    Email:
    <input type="text" bind:value={form.values.email} />
  </label>

  <label>
    Company:
    <input type="text" bind:value={form.values.company} />
  </label>

  <label>
    Industry:
    <select bind:value={form.values.industry}>
      <option disabled value="">Choose an industry</option>
      {#each industries as industry}
        <option>{industry}</option>
      {/each}
    </select>
  </label>

  <label>
    Social Media:
    <input type="text" bind:value={form.values.socialMedia} />
  </label>

  <label>
    Requested Services:
    {#each services as service (service)}
      <div>
        <input
          id={service}
          type="checkbox"
          bind:group={form.values.requestedServices}
          key={service}
          value={service}
        />
        <label for={service}>{service}</label>
      </div>
    {/each}
  </label>

  <button type="submit">Create</button>
</form>
