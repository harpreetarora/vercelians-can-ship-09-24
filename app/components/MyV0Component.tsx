/**
 * v0 by Vercel.
 * @see https://v0.dev/t/B9BwkPnnkQO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function Component() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Daily Feeding Schedule</CardTitle>
        <CardDescription>Customized for your infant's needs</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Feeding Times</Label>
              <ul className="space-y-2 text-sm">
                <li>6:00 AM</li>
                <li>9:00 AM</li>
                <li>12:00 PM</li>
                <li>3:00 PM</li>
                <li>6:00 PM</li>
                <li>9:00 PM</li>
              </ul>
            </div>
            <div>
              <Label>Feeding Duration</Label>
              <p className="text-sm">20-30 minutes per feeding</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Feeding Amounts</Label>
              <p className="text-sm">4-6 oz per feeding, adjusting based on infant's age and needs</p>
            </div>
            <div>
              <Label>Feeding Type</Label>
              <p className="text-sm">Breastmilk or formula, or a combination</p>
            </div>
          </div>
        </div>
        <Separator />
        <div className="grid gap-2">
          <Label>Additional Notes</Label>
          <ul className="space-y-2 text-sm">
            <li>Burp infant during and after feedings</li>
            <li>Watch for hunger cues</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
