import type { Contact } from "@prisma/client";
import { PersonIcon } from "@radix-ui/react-icons";

import { db } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AddContactModal } from "@/components/dialogs/add-contact-dialog";

const getContacts = async () => {
  const contacts: Contact[] = await db.contact.findMany();
  return contacts;
};

export default async function ContactsPage() {
  const contacts = await getContacts();
  return (
    <div className="">
      <div className="flex justify-end pb-4">
        <AddContactModal />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {contacts.map((contact) => {
          return (
            <Card key={contact.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {contact.name}
                </CardTitle>
                <PersonIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">{contact.email}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
